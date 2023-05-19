import { getSession } from "next-auth/react";
import { setJWTToken } from "../api/api.client";
import { IncomingMessage } from "http";

export const setToken = async (req: Partial<IncomingMessage> & {
    body?: any;
} | undefined): Promise<statusType> => {
    const token = await getSession({ req });
  if (token?.accessToken) {
    setJWTToken(token?.accessToken);
    return "success"
  }

  return 'fail'
}