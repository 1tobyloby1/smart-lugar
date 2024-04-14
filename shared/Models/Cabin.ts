import Zones from "./Zone";

export default interface Cabin {
    nodeId: string;
    displayName: string;
    zones: Zones[];
}