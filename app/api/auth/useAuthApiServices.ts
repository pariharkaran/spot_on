import {useCallback} from 'react'
import {
    EmployeePersonalAddressResponse,
    EmployeePersonalProfileRequestBody,
    EmployeePersonalProfileResponse,
    EmployeePersonalWorkResponse,
    ResendOtpRequestBody,
    ResendOtpResponse,
    SendOtpRequestBody,
    SendOtpResponseBody,
    VerifyOtpRequestBody,
    VerifyOtpResponse
} from '../../GlobalTypes'
import {useApiServices} from '../ApiServicesContext'
import {ApiSuccessRes} from '../BaseApi'

export const useAuthApiServices = () => {
    const {AuthApi} = useApiServices()

    const sendOtp = useCallback(
        async (data: SendOtpRequestBody) => {
            const apiRequestBody: SendOtpRequestBody = {
                mobile_no: data.mobile_no,
                country_code: data.country_code,
                // user_type_id: data.user_type_id,
                device_type: data.device_type
            }

            const result = (await AuthApi.sendOtp(
                apiRequestBody
            )) as ApiSuccessRes<SendOtpResponseBody>

            return result
        },
        [AuthApi]
    )

    const verifyOtpAndLogin = useCallback(
        async (data: VerifyOtpRequestBody) => {
            const apiRequestBody: VerifyOtpRequestBody = {
                country_code: data.country_code,
                mobile_no: data.mobile_no,
                verification_code: data.verification_code,
                user_type_id: data.user_type_id,
                device_type: data.device_type,
                device_id: data.device_id,
                device_fcm_token: data.device_fcm_token
            }

            const result = (await AuthApi.verifyOtp(
                apiRequestBody
            )) as ApiSuccessRes<VerifyOtpResponse>
            return result
        },
        [AuthApi]
    )

    const resendOtp = useCallback(
        async (data: ResendOtpRequestBody) => {
            const apiRequestBody: ResendOtpRequestBody = {
                mobile_no: data.mobile_no,
                country_code: data.country_code,
                user_type_id: data.user_type_id,
                resend: data.resend
            }

            const result = (await AuthApi.resendOtp(
                apiRequestBody
            )) as ApiSuccessRes<ResendOtpResponse>

            return result
        },
        [AuthApi]
    )

    const employePersonalDetails = useCallback(
        async (data: FormData) => {
            console.log('FormData received >>>>>>', data)

            // Ensure Axios headers are correctly set for FormData
            const result = (await AuthApi.employePersonalDetails(
                data
            )) as ApiSuccessRes<EmployeePersonalProfileResponse>

            return result
        },
        [AuthApi]
    )

    const employeWorkDetails = useCallback(
        async (data: FormData) => {
            console.log('employe work details > form data > ', data)

            const result = (await AuthApi.employeWorkDetails(
                data
            )) as ApiSuccessRes<EmployeePersonalWorkResponse>

            return result
        },
        [AuthApi]
    )

    const employeAddressDetails = useCallback(
        async (data: FormData) => {
            console.log(' employee addressb details > formdata > ', data)
            const result = (await AuthApi.employeAddressDetails(
                data
            )) as ApiSuccessRes<EmployeePersonalAddressResponse>

            return result
        },
        [AuthApi]
    )
    return {
        sendOtp,
        verifyOtpAndLogin,
        resendOtp,
        employePersonalDetails,
        employeWorkDetails,
        employeAddressDetails
    }
}
