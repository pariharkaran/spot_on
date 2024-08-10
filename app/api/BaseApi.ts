import {AxiosError, AxiosRequestConfig, AxiosInstance} from 'axios'

export type ApiSuccessRes<T> = {
    success: boolean
    data: T
    message?: string
    status: number
}

const isInternetConnected = true //internet check

export abstract class BaseApi {
    private httpClient: AxiosInstance

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient
    }

    protected async get<T>(
        path: string,
        config?: AxiosRequestConfig
    ): Promise<T | AxiosError> {
        try {
            if (!isInternetConnected) {
                return {
                    status: -1,
                    message: 'No network connected'
                } as AxiosError
            }

            if (config?.params) {
                for (const key in config.params) {
                    if (typeof config.params[key] === 'object') {
                        config.params[key] = JSON.stringify(config.params[key])
                    }
                }
            }
            if (!config) {
                config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            }

            // const {userDetails} = useSelector((state: RootState) => state)

            // const userAccessToken = userDetails.access

            // const res = await AsyncStorage.getItem('persist:userDetails')
            // const test = JSON.parse(res)
            // const test2 = JSON.parse(test.userDetails)
            // const userAccessToken = test2.access

            // if (userAccessToken) {
            //     config = {
            //         ...config,
            //         headers: {
            //             ...config?.headers,
            //             Authorization: `Bearer ${userAccessToken}`
            //         }
            //     }
            // }

            return (await this.httpClient.get(path, config)).data
        } catch (error) {
            return error as AxiosError
        }
    }

    protected async post<T>(
        path: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<T | AxiosError | ApiSuccessRes<T>> {
        console.log('Post data', path, data)
        try {
            if (!isInternetConnected) {
                return {
                    status: -1,
                    message: 'No network connected'
                } as AxiosError
            }

            if (!config) {
                config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            }
            // const {userDetails} = useSelector((state: RootState) => state)

            // const userAccessToken = userDetails.access

            // if (userAccessToken) {
            //     config = {
            //         ...config,
            //         headers: {
            //             ...config?.headers,
            //             Authorization: `Bearer ${userAccessToken}`
            //         }
            //     }
            // }
            // const res = await AsyncStorage.getItem('persist:userDetails')
            // const test = JSON.parse(res)
            // const test2 = JSON.parse(test.userDetails)
            // const userAccessToken = test2.access

            // if (userAccessToken) {
            //     config = {
            //         ...config,
            //         headers: {
            //             ...config?.headers,
            //             Authorization: `Bearer ${userAccessToken}`
            //         }
            //     }
            // }

            const result = (await this.httpClient.post(
                path,
                data,
                config
            )) as ApiSuccessRes<T>
            console.log('apis success: ', JSON.stringify(result))
            return {
                success: result.success, // pass result.success
                data: result.data,
                status: result.status,
                message: result?.message
            }
        } catch (error) {
            return error as AxiosError
        }
    }

    protected async put<T>(
        path: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<T | AxiosError> {
        try {
            if (!isInternetConnected) {
                return {
                    status: -1,
                    message: 'No network connected'
                } as AxiosError
            }

            // const res = await AsyncStorage.getItem('persist:userDetails')
            // const test = JSON.parse(res)
            // const test2 = JSON.parse(test.userDetails)
            // const userAccessToken = test2.access

            // if (userAccessToken) {
            //     config = {
            //         ...config,
            //         headers: {
            //             ...config?.headers,
            //             Authorization: `Bearer ${userAccessToken}`
            //         }
            //     }
            // }
            return (await this.httpClient.put(path, data, config)).data
        } catch (error) {
            return error as AxiosError
        }
    }

    protected async patch<T>(
        path: string,
        data: unknown,
        config?: AxiosRequestConfig
    ): Promise<T | AxiosError> {
        try {
            if (!isInternetConnected) {
                return {
                    status: -1,
                    message: 'No network connected'
                } as AxiosError
            }

            return (await this.httpClient.patch(path, data, config)).data
        } catch (error) {
            return error as AxiosError
        }
    }

    protected async delete<T>(
        path: string,
        config?: AxiosRequestConfig
    ): Promise<T | AxiosError> {
        try {
            if (!isInternetConnected) {
                return {
                    status: -1,
                    message: 'No network connected'
                } as AxiosError
            }

            return (await this.httpClient.delete(path, config)).data
        } catch (error) {
            return error as AxiosError
        }
    }
}
