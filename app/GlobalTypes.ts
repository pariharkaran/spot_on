export enum UserType {
    SuperAdmin = 1,
    CompanyAdmin = 2,
    Employee = 3,
    Manager = 4,
    TeamLead = 5
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

export type VerifyOtpRequestBody = {
    country_code: string
    mobile_no: string
    verification_code: string
    user_type_id: number
    device_type: number
    device_id: string
    device_fcm_token: string
}

export type VerifyOtpResponse = {
    token: string
    email: string
    name: string
    user_type_id: UserType
}

export type ResendOtpRequestBody = {
    country_code: string
    mobile_no: string
    user_type_id: number
    resend: number
}

export type ResendOtpResponse = {
    name: string | null
    email: string
    country_code: string
    mobile_no: string
}
export enum BloodGroup {
    A_POSITIVE = 'A+',
    A_NEGATIVE = 'A-',
    B_POSITIVE = 'B+',
    B_NEGATIVE = 'B-',
    AB_POSITIVE = 'AB+',
    AB_NEGATIVE = 'AB-',
    O_POSITIVE = 'O+',
    O_NEGATIVE = 'O-'
}
