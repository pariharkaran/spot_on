import Config from 'react-native-config'

import {LoginApiReqBody, LoginApiResponse} from '../../GlobalTypes'
import {API_ROUTES} from '../ApiRoutes'
import {BaseApi} from '../BaseApi'
export default class AuthApis extends BaseApi {
    async login(reqBody: LoginApiReqBody) {
        return this.post<LoginApiResponse>(
            `${Config.BASE_URL}${API_ROUTES.login}`,
            reqBody
        )
    }
}
