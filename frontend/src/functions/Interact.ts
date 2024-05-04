import api, { apiResponse } from "./api";

const Interact = async (parentId: string, nodeId: string, value?: any): Promise<apiResponse> => {
    const response = await api({
        method: "GET",
        url: `/mapping/interact`,
        params: {
            parentId,
            nodeId,
            setValue: value,
        },
    });

    return response;
}

export default Interact;