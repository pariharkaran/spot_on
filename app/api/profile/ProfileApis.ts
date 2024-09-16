import Config from 'react-native-config'

import {
    EmployeePersonalProfileRequestBody,
    EmployeePersonalProfileResponse
} from '../../GlobalTypes'
import {API_ROUTES} from '../ApiRoutes'
import {BaseApi} from '../BaseApi'
export default class ProfileApis extends BaseApi {
    async updatePersonalProfile(
        requestBody: EmployeePersonalProfileRequestBody
    ) {
        return this.post<EmployeePersonalProfileResponse>(
            `${Config.BASE_URL}${API_ROUTES.employePersonalProfile}`,
            requestBody
        )
    }
}
