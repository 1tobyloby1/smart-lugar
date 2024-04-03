import axios, { AxiosError, Method } from "axios";

interface apiProps {
  url: string;
  method: Method;
  params?: any;
}

export interface apiResponse {
  successful: boolean;
  data: any;
}

const api = async (props: apiProps): Promise<apiResponse> => {
  try {
    const request = await axios({
      method: props.method,
      url: process.env.REACT_APP_API_HOST + props.url,
      params: props.params
    });

    const isSuccessful = request.status === 200;
    return { successful: isSuccessful, data: request.data };
  } catch (error: any) {
    return { successful: false, data: (error as AxiosError).message };
  }
};

export default api;
