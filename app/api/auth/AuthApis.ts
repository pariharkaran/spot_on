import Config from 'react-native-config'

import {
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
}
