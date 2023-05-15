import { api } from "@/shared/api/api.client"
import { ISignUpRequest, ISignInRequest } from "./interfaces.api"


export const signUp = async (payload: ISignUpRequest) => {
    return api.post('auth/register', payload)
} 


export const signIn = async (payload: ISignInRequest) => {
    return api.post('auth/login', payload)
} 