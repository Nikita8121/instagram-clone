import axios, { AxiosHeaders } from 'axios';


const { API_URL} = process.env

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  /* (config) => {
  
    if (token) {
      // Configure this as per your backend requirements
      // eslint-disable-next-line no-param-reassign
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return config;
  }, */
  (error) => {
    return Promise.reject(error);
  },
);

export const api = {
  get(url: string) {
    return axios
      .get(`${API_URL}${url}`)
      .then((response) => {
        return response.data?.data;
      })
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
  getFullResponse(url: string, params?: { [key: string]: string | string[] | number }) {
    return axios
      .get(`${API_URL}${url}`, {
        params,
      })
      .then((response) => response.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
  put(url: string, payload: unknown) {
    return axios
      .put(`${API_URL}${url}`, payload)
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
  post(url: string, payload: unknown) {
    return axios
      .post(`${API_URL}${url}`, payload)
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
  patch(url: string, payload: unknown) {
    return axios
      .patch(`${API_URL}${url}`, payload)
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
  delete(url: string, payload = {}) {
    return axios
      .delete(`${API_URL}${url}`, payload)
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
};