import { ReferenceDescription } from "node-opcua-client";
import Room from "shared/Models/Room";
import ComponentTypes from "shared/resources/ComponentTypes";

const MapComponentType = (parent: ReferenceDescription, room: Room): keyof typeof ComponentTypes => {
    if (parent.typeDefinition.toString() === "ns=5;i=719") return "List_Item";
    else if (room.type === "ns=5;i=599" && parent.typeDefinition.toString() === "ns=5;i=723") return "Temperature_Slider";

    return "List_Item";
}

export default MapComponentType;