import { NodeClass, ResultMask } from "node-opcua-client";
import { OPCUAProps } from "../services/OPCUA";
import Room from "shared/Models/Room";

const FindMeasurementByRoom = async (opcuaInstance: OPCUAProps, room: Room, subFolder: string): Promise<string[]> => {
    const subFolderNode = await opcuaInstance.browseObject(room.nodeId, {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.DisplayName,
        filter: (r) => r.displayName.text === subFolder,
    });

    if (!subFolderNode || subFolderNode.length === 0) return [];

    const measurements = await opcuaInstance.browseObject(subFolderNode[0].nodeId.toString(), {
        nodeClassMask: NodeClass.Variable,
    });

    if (!measurements) return [];

    return measurements.map((measurement) => measurement.nodeId.toString());
};

export default FindMeasurementByRoom;