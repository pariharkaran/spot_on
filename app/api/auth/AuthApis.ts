import Config from 'react-native-config'

import {
    EmployeAddressDetailsRequestBody,
    EmployeePersonalAddressResponse,
    EmployeePersonalProfileRequestBody,
    EmployeePersonalProfileResponse,
    EmployeePersonalWorkResponse,
    EmployeWorkDetailsRequestBody,
    ResendOtpRequestBody,
    ResendOtpResponse,
    SendOtpRequestBody,
    SendOtpResponseBody,
    VerifyOtpRequestBody,
    VerifyOtpResponse
} from '../../GlobalTypes'
import {API_ROUTES} from '../ApiRoutes'
import {BaseApi} from '../BaseApi'
export default class AuthApis extends BaseApi {
    async sendOtp(requestBody: SendOtpRequestBody) {
        return this.post<SendOtpResponseBody>(
            `${Config.BASE_URL}${API_ROUTES.sendOtp}`,
            requestBody
        )
    }

    async verifyOtp(requestBody: VerifyOtpRequestBody) {
        return this.post<VerifyOtpResponse>(
            `${Config.BASE_URL}${API_ROUTES.verifyAndLogin}`,
            requestBody
        )
    }

    async resendOtp(requestBody: ResendOtpRequestBody) {
        return this.post<ResendOtpResponse>(
            `${Config.BASE_URL}${API_ROUTES.resendOtp}`,
            requestBody
        )
    }

    async employePersonalDetails(
        requestBody: EmployeePersonalProfileRequestBody
    ) {
        return this.post<EmployeePersonalProfileResponse>(
            `${Config.BASE_URL}${API_ROUTES.employePersonalProfile}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }

    async employeWorkDetails(requestBody: EmployeWorkDetailsRequestBody) {
        return this.post<EmployeePersonalWorkResponse>(
            `${Config.BASE_URL}${API_ROUTES.employeWorkDetails}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }

    async employeAddressDetails(requestBody: EmployeAddressDetailsRequestBody) {
        return this.post<EmployeePersonalAddressResponse>(
            `${Config.BASE_URL}${API_ROUTES.employeAddressDetails}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }
}
