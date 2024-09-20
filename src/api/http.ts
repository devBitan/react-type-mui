import axios, { AxiosInstance } from 'axios';

export const BASE_URL = "http://localhost:8081/api/v1/ricoin/";

export function httpService() {
  const http: AxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const httpGet = async (url: string) => {
    try {
      const response = await http.get(url);
      return response.data;
    } catch (error) {
      console.error('HTTP GET Error:', error);
      throw error;
    }
  };

  const httpPost = async (url: string, data: any) => {
    try {
      const response = await http.post(url, data);
      return response.data;
    } catch (error) {
      console.error('HTTP POST Error:', error);
      throw error;
    }
  };

  const httpPut = async (url: string, data: any) => {
    try {
      const response = await http.put(url, data);
      return response.data;
    } catch (error) {
      console.error('HTTP PUT Error:', error);
      throw error;
    }
  };

  const httpDelete = async (url: string, data: any) => {
    try {
      const response = await http.delete(url, { data });
      return response.data;
    } catch (error) {
      console.error('HTTP DELETE Error:', error);
      throw error;
    }
  };

  return {
    httpGet,
    httpPost,
    httpPut,
    httpDelete,
  };
}
