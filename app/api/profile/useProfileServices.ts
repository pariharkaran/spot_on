import {useCallback} from 'react'
import {
    EmployeePersonalProfileRequestBody,
    SendOtpResponseBody
} from '../../GlobalTypes'
import {useApiServices} from '../ApiServicesContext'
import {ApiSuccessRes} from '../BaseApi'

export const useAuthApiServices = () => {
    const {ProfileApi} = useApiServices()

    const updatePersonalProfile = useCallback(
        async (data: EmployeePersonalProfileRequestBody) => {
            const apiRequestBody: EmployeePersonalProfileRequestBody = data

            const result = (await ProfileApi.updatePersonalProfile(
                apiRequestBody
            )) as ApiSuccessRes<SendOtpResponseBody>

            return result
        },
        []
    )

    return {
        updatePersonalProfile
    }
}
