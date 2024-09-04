export enum UserType {
    SuperAdmin = 1,
    CompanyAdmin = 2,
    Employee = 3,
    Manager = 4,
    TeamLead = 5
}
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

export type SendOtpRequestBody = {
    country_code: string
    mobile_no: string
    user_type_id: UserType
}

export type SendOtpResponseBody = {
    name: string | null
    email: string
    country_code: string
    mobile_no: string
}
