import {useCallback} from 'react'
import {SendOtpRequestBody, SendOtpResponseBody} from '../../GlobalTypes'
import {useApiServices} from '../ApiServicesContext'

export const useAuthApiServices = () => {
    const {AuthApi} = useApiServices()

    const sendOtp = useCallback(
        async (data: SendOtpRequestBody) => {
            const apiRequestBody: SendOtpRequestBody = {
                mobile_no: data.mobile_no,
                country_code: data.country_code,
                user_type_id: data.user_type_id
            }

            const result = (await AuthApi.sendOtp(
                apiRequestBody
            )) as SendOtpResponseBody

            return {
                data: result
            }
        },
        [AuthApi]
    )

    return {
        sendOtp
    }
}
