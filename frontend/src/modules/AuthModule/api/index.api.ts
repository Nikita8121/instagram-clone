import { api } from "@/shared/api/api.client"
import { RegisterSchema } from "../zod-schemas/register.schema"
import { SignInSchema } from '../zod-schemas/sign-in.schema'

export const signUp = async (payload: RegisterSchema) => {
    return api.post('auth/register', payload)
} 


export const signIn = async (payload: SignInSchema) => {
    return api.post('auth/login', payload)
} 