import Config from 'react-native-config'

import {SendOtpRequestBody, SendOtpResponseBody} from '../../GlobalTypes'
import {API_ROUTES} from '../ApiRoutes'
import {BaseApi} from '../BaseApi'
export default class AuthApis extends BaseApi {
    async sendOtp(requestBody: SendOtpRequestBody) {
        return this.post<SendOtpResponseBody>(
            `${Config.BASE_URL}${API_ROUTES.sendOtp}`,
            requestBody
        )
    }
}
