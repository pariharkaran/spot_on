import {VerifyOtpResponse} from '../../GlobalTypes'

export enum VerifyOtpActionTypes {
    SET_USER_DETAILS = 'SET_USER_DETAILS'
}

export const SET_USER_DETAILS = 'SET_USER_DETAILS'

export const setUserDetails = (userDetails: VerifyOtpResponse) => ({
    type: SET_USER_DETAILS,
    payload: userDetails
})

type SetUserDetailsAction = {
    type: typeof SET_USER_DETAILS
    payload: VerifyOtpResponse
}

export type VerifyOtpAction = SetUserDetailsAction
