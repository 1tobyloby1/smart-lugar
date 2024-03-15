import ComponentTypes from "../resources/ComponentTypes";

export default interface Component {
    type: keyof typeof ComponentTypes;
    value: string | number;
    label?: string;
}