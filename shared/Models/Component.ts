import ComponentTypes from "../resources/ComponentTypes";

export default interface Component {
    type: ComponentTypes;
    value: string | number;
    label?: string;
}