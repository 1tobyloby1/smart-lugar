import {
  AttributeIds,
  CallMethodResult,
  ClientSession,
  DataType,
  DataValue,
  OPCUAClient,
  ReferenceDescription,
  StatusCode,
  TimestampsToReturn,
} from "node-opcua-client";
import BrowseOptions from "../models/BrowseOptions";

export interface OPCUAProps {
  connect: () => Promise<void>;
  browseObject: (nodeId: string, options?: BrowseOptions) => Promise<ReferenceDescription[] | null>;
  browseObjectRecursive: (nodeId: string, filter: (r: ReferenceDescription) => boolean, options?: BrowseOptions) => Promise<ReferenceDescription[]>;
  readVariable: (nodeId: string) => Promise<DataValue>;
  updateVariable: (nodeId: string, value: any) => Promise<StatusCode>;
  callMethod: (nodeId: string, methodId: string, inputArguments?: []) => Promise<CallMethodResult>;
  disconnect: () => Promise<void>;
  subscribe: (nodeId: string) => Promise<void>;
}

const OPCUA = (): OPCUAProps => {
  const client = OPCUAClient.create({});
  let session: ClientSession;

  const connect = async () => {
    await client.connect("opc.tcp://192.168.1.17:4840");
    session = await client.createSession();
  };

  const subscribe = async (nodeId: string) => {
    try {
      const subscription = await session.createSubscription2({});

      const monitoredItem = await subscription.monitor({
        nodeId: nodeId,
        attributeId: AttributeIds.Value,
      }, { samplingInterval: 3000, filter: null, queueSize: 1, discardOldest: true }, TimestampsToReturn.Neither);

      monitoredItem.on("changed", (dataValue) => {
        console.log(dataValue.value.value);
      });
    } catch (error) {
      console.error('Error subscribing to node:', error);
    }
  };

  const disconnect = async () => {
    await session.close();
    await client.disconnect();
  };

  const browseObject = async (nodeId: string, options?: BrowseOptions) => {
    try {
      const browseResult = await session.browse({
        nodeId: nodeId,
        ...options,
      });

      if (options?.filter) {
        return browseResult.references!.filter(options.filter);
      }
      return browseResult.references;
    } catch (error) {
      return [];
    }
  };

  const browseObjectRecursive = async (nodeId: string, filter: (r: ReferenceDescription) => boolean, options?: BrowseOptions) => {
    const browseResult = await browseObject(nodeId, options);
    if (!browseResult) return [];

    let result: ReferenceDescription[] = [];

    for (const r of browseResult) {
      if (filter(r)) {
        result.push(r);
      }
      result = result.concat(await browseObjectRecursive(r.nodeId.toString(), filter, options));
    };
    return result;
  };

  const readVariable = async (nodeId: string) => {
    return await session.read({
      nodeId: nodeId,
      attributeId: AttributeIds.Value,
    });
  };

  const updateVariable = async (nodeId: string, value: any) => {
    return await session.write({
      nodeId: nodeId,
      attributeId: 13,
      value: {
        value: {
          dataType: DataType.Double,
          value: value,
        },
      },
    });
  };

  const callMethod = async (nodeId: string, methodId: string, inputArguments?: []) => {
    return await session.call({
      objectId: nodeId,
      methodId: methodId,
      inputArguments: inputArguments,
    });
  };

  return {
    connect,
    browseObject,
    browseObjectRecursive,
    readVariable,
    updateVariable,
    callMethod,
    disconnect,
    subscribe,
  };
};

export default OPCUA;
