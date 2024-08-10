export type LoginApiReqBody = {
    email: string
    password: string
}
export interface LoginApiResponse {
    refresh: string
    access: string
    access_token_expires_in: number
    refresh_token_expires_in: number
}
