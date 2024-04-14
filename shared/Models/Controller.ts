import ComponentTypes from "../resources/ComponentTypes";

export default interface Controller {
    type: keyof typeof ComponentTypes;
    nodeId: string;
    ActualValue?: string;
    Disable: string;
    Enable: string;
    IsEnabled: string;
    SetPoint?: string;
    room?: string;
}