import axios, { AxiosError, AxiosHeaders } from "axios";
import { getSession } from "next-auth/react";
import getConfig from "next/config";
import { ZodType, z } from "zod";

type requestError = Error | AxiosError | any;

const { publicRuntimeConfig } = getConfig();

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      console.log(session);

      // Configure this as per your backend requirements
      // eslint-disable-next-line no-param-reassign
      (config.headers as AxiosHeaders).set(
        "Authorization",
        `Bearer ${session.accessToken}`
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.defaults.baseURL = publicRuntimeConfig.backendUrl;

const handleRequestError = (e: requestError) => {
  if (axios.isAxiosError(e)) {
    return e.message;
  }

  if (e instanceof Error) {
    return e.message;
  }

  return e;
};

const parseResponse = (data: unknown, schema: ZodType) => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    // Log to service to be informed
    console.log(parsed.error);
  }
  return data;
};

const parseOptionalResponse = (data: unknown, schema?: ZodType) => {
  if (schema) {
    return parseResponse(data, schema);
  }
  return data;
};

export const api = {
  async get<T>(
    url: string,
    schema: ZodType,
    params?: { [key: string]: string | string[] | number }
  ): Promise<T> {
    try {
      const response = await axiosClient.get(url, {
        params,
      });

      return parseResponse(response.data?.data, schema) as T;
    } catch (e: requestError) {
      return handleRequestError(e);
    }
  },
  getFullResponse(
    url: string,
    schema: ZodType,
    params?: { [key: string]: string | string[] | number }
  ) {
    return axiosClient
      .get(url, {
        params,
      })
      .then((response) => parseResponse(response.data, schema))
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(
          error?.response?.data || error?.response || error
        );
      });
  },
  put(url: string, payload: unknown, schema?: ZodType) {
    return axiosClient
      .put(url, payload)
      .then((response) => parseOptionalResponse(response.data?.data, schema))
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(
          error?.response?.data || error?.response || error
        );
      });
  },
  post(url: string, payload: unknown, schema?: ZodType) {
    return axiosClient
      .post(url, payload)
      .then((response) => parseOptionalResponse(response.data?.data, schema))
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(
          error?.response?.data || error?.response || error
        );
      });
  },
  patch(url: string, payload: unknown, schema?: ZodType) {
    return axiosClient
      .patch(url, payload)
      .then((response) => parseOptionalResponse(response.data?.data, schema))
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(
          error?.response?.data || error?.response || error
        );
      });
  },
  delete(url: string, payload = {}, schema?: ZodType) {
    return axiosClient
      .delete(url, payload)
      .then((response) => parseOptionalResponse(response.data?.data, schema))
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(
          error?.response?.data || error?.response || error
        );
      });
  },
};

export const setJWTToken = (token: string) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};
