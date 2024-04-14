import { NodeClass, ResultMask } from "node-opcua-client";
import { OPCUAProps } from "../services/OPCUA";
import Room from "shared/Models/Room";
import Controller from "shared/Models/Controller";
import FindContentByController from "./FindContentByController";

const FindControllersByRoom = async (opcuaInstance: OPCUAProps, room: Room, subFolder: string): Promise<Controller[]> => {
    const subFolderNode = await opcuaInstance.browseObject(room.nodeId, {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.DisplayName,
        filter: (r) => r.displayName.text === subFolder,
    });

    if (!subFolderNode || subFolderNode.length === 0) return [];

    const controllers = await opcuaInstance.browseObject(subFolderNode[0].nodeId.toString(), {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.TypeDefinition,
    });

    if (!controllers) return [];

    const controllerPromises = controllers.map(async (controller) => await FindContentByController(opcuaInstance, controller, room));
    const resolvedControllers = await Promise.all(controllerPromises);

    return resolvedControllers;
};

export default FindControllersByRoom;