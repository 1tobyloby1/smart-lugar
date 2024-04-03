import Room from "./Room";

export default interface Zone {
    nodeId: string;
    browseName: string;
    displayName: string;
    rooms: Room[];
};