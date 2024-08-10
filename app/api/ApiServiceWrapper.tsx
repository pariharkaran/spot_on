import React, {PropsWithChildren, useMemo} from 'react'
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import Config from 'react-native-config'
import AuthApis from './auth/AuthApis'
import {
    ApiServicesContext,
    ApiServicesContextValues
} from './ApiServicesContext'
import {Alert} from 'react-native'

const TIMEOUT = 150000

function ApiServicesWrapper(props: PropsWithChildren) {
    // uncomment once Redux setup is done

    // const userDetails = useSelector((state: RootState) => state.userDetails)

    // const isTokenNonEmpty = isNonNullableAndNonEmpty(userDetails.access)

    // const navigation = useNavigation()

    const createInstance = (
        url: string,
        additionalHeaders: AxiosRequestConfig['headers'] = {}
    ): AxiosInstance => {
        const axiosInstance = axios.create({
            baseURL: url,
            timeout: TIMEOUT,
            headers: {
                ...additionalHeaders
                // ...(isTokenNonEmpty && {
                //     Authorization: `Bearer ${userDetails.access}`
                // })
            }
        })

        axiosInstance.interceptors.response.use(
            response => {
                if (response.data?.Error === 'Invalid Token') {
                    return {
                        data: null,
                        status: response.status,
                        success: false,
                        message: response.data?.Error
                    }
                }
                const res = {
                    data: response.data,
                    status: response.status,
                    success: response.data?.success ?? false,
                    message: response.statusText
                }
                return res
            },
            async error => {
                const stringifiedError = JSON.stringify(error)
                const errorJson = JSON.parse(stringifiedError)
                if (errorJson.status === 401 || errorJson.status === 400) {
                    // uncomment once API integration is done
                    // await AsyncStorage.clear();
                    // navigation.dispatch(
                    //     CommonActions.reset({
                    //         index: 1,
                    //         routes: [{ name: LOGIN }]
                    //     })
                    // );
                }
                console.error('Instance Create Error', error)
                Alert.alert('Error', 'Something went wrong please try again')
                return Promise.reject(error)
            }
        )

        return axiosInstance
    }

    const AuthApiClient = useMemo(
        () => createInstance(`${Config.BASE_URL}`),
        []
    )

    const apiServices: ApiServicesContextValues = useMemo(
        () => ({
            AuthApi: new AuthApis(AuthApiClient)
        }),
        [AuthApiClient]
    )

    return (
        <ApiServicesContext.Provider value={apiServices}>
            {props.children}
        </ApiServicesContext.Provider>
    )
}

export {ApiServicesWrapper}
