import { NodeClass, ResultMask } from "node-opcua-client";
import Zone from "shared/Models/Zone";
import { OPCUAProps } from "../services/OPCUA";
import Room from "shared/Models/Room";

const FindRoomsByZone = async (opcuaInstance: OPCUAProps, zone: Zone): Promise<Room[]> => {
    const rooms = await opcuaInstance.browseObject(zone.nodeId, {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.DisplayName | ResultMask.TypeDefinition,
    });

    if (!rooms) return [];

    return rooms.map((room) => {
        return {
            nodeId: room.nodeId.toString(),
            displayName: room.displayName.text!.toString(),
            type: room.typeDefinition.toString(),
            controllers: [],
            measurements: [],
        };
    });
};

export default FindRoomsByZone;