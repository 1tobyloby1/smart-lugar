import Component from "./Component";

export default interface Control {
    title: string;
    image: string;
    href: string;
    components: Array<Component>;
}