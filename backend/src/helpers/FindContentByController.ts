import { ReferenceDescription, ResultMask } from "node-opcua-client";
import { OPCUAProps } from "../services/OPCUA";
import Controller from "shared/Models/Controller";
import MapComponentType from "../functions/MapComponentType";
import Room from "shared/Models/Room";

const FindContentByController = async (opcuaInstance: OPCUAProps, controller: ReferenceDescription, room: Room): Promise<Controller> => {
    const nodeId = controller.nodeId.toString();

    const children = await opcuaInstance.browseObject(nodeId, {
        resultMask: ResultMask.DisplayName | ResultMask.TypeDefinition,
    });

    if (!children) return {
        nodeId: nodeId,
        type: "List_Item",
        Disable: "",
        Enable: "",
        IsEnabled: "",
    };

    const formatted = children.map((child) => {
        return {
            nodeId: child.nodeId.toString(),
            displayName: child.displayName.text!.toString(),
        };
    });

    return {
        nodeId: nodeId,
        type: MapComponentType(controller, room),
        ActualValue: formatted.find((t) => t.displayName === "ActualValue")?.nodeId || undefined,
        Disable: formatted.find((t) => t.displayName === "Disable")?.nodeId || "",
        Enable: formatted.find((t) => t.displayName === "Enable")?.nodeId || "",
        IsEnabled: formatted.find((t) => t.displayName === "IsEnabled")?.nodeId || "",
        SetPoint: formatted.find((t) => t.displayName === "Setpoint")?.nodeId || undefined,
    };
};

export default FindContentByController;