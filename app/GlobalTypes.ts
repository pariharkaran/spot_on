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
    // user_type_id: UserType
    device_type: number
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

export enum Designation {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    QA_TESTING = 'QA'
}

export enum Job_Location {
    AHMD = 'Ahmedabad',
    RJKT = 'Rajkot',
    SURAT = 'SURAT'
}

export enum work_State {
    state_one = 'State_one',
    state_two = 'State_two',
    state_three = 'state_three'
}

export enum work_country {
    counrty_one = 'country_one',
    country_two = 'country_two',
    country_three = 'country_three'
}
export type ProfilePicture = {
    uri: string
    type: string
    name: string
}
export type EmployeePersonalProfileRequestBody = {
    personal_email: string
    emg_country_code: string
    emg_mobile_no: string
    fname: string
    lname: string
    profile_pic: File | null
    gender_id: string
    blood_group: string
    pincode: string
}

export type EmployeWorkDetailsRequestBody = {
    designation_id: number
    work_country_id: number
    work_state_id: number
    work_city_id: number
}

export type EmployeAddressDetailsRequestBody = {
    present_address: string
    permanent_address: string
}

export type EmployeePersonalProfileResponse = {
    success: boolean
}

export type EmployeePersonalWorkResponse = {
    success: boolean
}

export type EmployeePersonalAddressResponse = {
    success: boolean
}
