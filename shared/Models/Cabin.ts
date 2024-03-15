import Control from "./Control";

export default interface Cabin {
    id: string;
    controls: Array<Control>;
}