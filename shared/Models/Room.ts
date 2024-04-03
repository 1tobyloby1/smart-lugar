import Controller from "./Controller";

export default interface Room {
    nodeId: string;
    displayName: string;
    type: string;
    controllers: Controller[];
    measurements: string[];
}