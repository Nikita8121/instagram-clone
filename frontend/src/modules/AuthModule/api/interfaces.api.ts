export interface ISignUpRequest {
    fullName: string,
    email: string,
    username: string,
    password: string
}

export interface ISignInRequest {
    emailOrUsername: string,
    password: string
}