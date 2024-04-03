import { NodeClass, ResultMask } from "node-opcua-client";
import { OPCUAProps } from "../services/OPCUA";
import Cabin from "shared/Models/Cabin";

const FindAllCabins = async (opcuaInstance: OPCUAProps, cabinsFolder: string): Promise<Cabin[]> => {
    const cabins = await opcuaInstance.browseObject(cabinsFolder, {
        nodeClassMask: NodeClass.Object,
        resultMask: ResultMask.DisplayName,
    });

    if (!cabins) return [];

    return cabins.map((cabin) => {
        return {
            nodeId: cabin.nodeId.toString(),
            displayName: cabin.displayName.text!.toString(),
            zones: []
        };
    });
};

export default FindAllCabins;