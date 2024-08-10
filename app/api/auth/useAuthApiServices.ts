import {useCallback} from 'react'
import {LoginApiReqBody, LoginApiResponse} from '../../GlobalTypes'
import {useApiServices} from '../ApiServicesContext'
import {ApiSuccessRes} from '../BaseApi'

export const useAuthApiServices = () => {
    const {AuthApi} = useApiServices()

    const login = useCallback(
        async (data: LoginApiReqBody) => {
            const apiRequestBody: LoginApiReqBody = {
                email: data.email,
                password: data.password
            }

            const result = (await AuthApi.login(
                apiRequestBody
            )) as ApiSuccessRes<LoginApiResponse>

            return {
                data: result.data,
                success: result.success
            }
        },
        [AuthApi]
    )

    return {
        login
    }
}
