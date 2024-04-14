import api from "./api";

const GetComponentData = async (nodeId: string): Promise<any> => {
    let componentData;

    const response = await api({
        method: "GET",
        url: `/mapping/interact`,
        params: {
            nodeId: nodeId,
        },
    });

    if (response.successful) {
        componentData = response.data;
    }

    return componentData;
}

export default GetComponentData;