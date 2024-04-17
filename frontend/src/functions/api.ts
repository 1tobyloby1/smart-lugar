import axios, { AxiosError, Method } from "axios";

interface apiProps {
  url: string;
  method: Method;
  params?: any;
}

export interface apiResponse {
  successful: boolean;
  status: number;
  data: any;
}

const api = async (props: apiProps): Promise<apiResponse> => {
  try {
    const request = await axios({
      method: props.method,
      url: process.env.REACT_APP_API_HOST + props.url,
      params: props.params
    });

    const isSuccessful = request.status === 200 || request.status === 201;
    return { successful: isSuccessful, data: request.data, status: request.status };
  } catch (error: any) {
    return { successful: false, data: (error as AxiosError).message, status: (error as AxiosError).response?.status ?? 500 };
  }
};

export default api;
