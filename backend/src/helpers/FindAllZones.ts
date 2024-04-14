import { NodeClass, ResultMask } from "node-opcua-client";
import { OPCUAProps } from "../services/OPCUA";
import Zone from "shared/Models/Zone";
import Cabin from "shared/Models/Cabin";

const FindAllZones = async (opcuaInstance: OPCUAProps, cabin: Cabin): Promise<Zone[]> => {
    const zones = await opcuaInstance.browseObject(cabin.nodeId, {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.TypeDefinition | ResultMask.DisplayName | ResultMask.BrowseName,
        filter: (r) => r.typeDefinition.toString() === "ns=0;i=61"
    });

    if (!zones) return [];

    return zones.map((zone) => {
        return {
            nodeId: zone.nodeId.toString(),
            browseName: zone.browseName.name!.toString(),
            displayName: zone.displayName.text!.toString(),
            rooms: []
        };
    });
};

export default FindAllZones;