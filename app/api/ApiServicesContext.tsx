import {createContext, useContext} from 'react'
import AuthApis from './auth/AuthApis'

export type ApiServicesContextValues = {
    AuthApi: AuthApis
}

export const ApiServicesContext =
    createContext<ApiServicesContextValues | null>(null)

export const useApiServices = (): ApiServicesContextValues => {
    const context = useContext(ApiServicesContext)

    if (!context) {
        throw new Error('There is no context values for api')
    }

    return context
}
