import { api } from "@/shared/api/api.client"
import { z } from "zod";

export namespace getAccount {
    export const schema = z.object({
        _id: z.string(),
        fullName: z.string(),
        email: z.string(),
        avatar: z.string(),
    });
    
    export type accountType = z.infer<typeof schema>

    export const request = ()  => {
        return api.get<accountType>('account/get-account', schema)
    }
}