import { toast } from "react-toastify";
import api from "./api";

const Interact = async (parentId: string, nodeId: string, value?: any): Promise<any> => {
    let componentData;

    const response = await api({
        method: "GET",
        url: `/mapping/interact`,
        params: {
            parentId,
            nodeId,
            setValue: value,
        },
    });

    if (response.successful) {
        componentData = response.data;
    } else {
        toast.error(response.data);
    }

    return componentData;
}

export default Interact;