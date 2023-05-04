import { api } from "@/shared/api/api.client"
import { RegisterSchema } from "../zod-schemas/register.schema"

export const signUp = async (payload: RegisterSchema) => {
    return api.post('auth/register', payload)
} 