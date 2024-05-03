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
      params: props.params,
    });

    const isSuccessful = request.status === 200 || request.status === 201;
    return {
      successful: isSuccessful,
      data: request.data,
      status: request.status,
    };
  } catch (error: any) {
    const request = error as AxiosError;

    const message =
      (request.response?.data as Record<string, unknown>)?.message ??
      request.message;

    return {
      successful: false,
      data: message,
      status: request.response?.status ?? 500,
    };
  }
};

export default api;
