import { BrowseDescriptionOptions, ReferenceDescription } from "node-opcua-client";

export default interface BrowseOptions extends BrowseDescriptionOptions {
    filter?: (value: ReferenceDescription, index: number, array: ReferenceDescription[]) => boolean;
}