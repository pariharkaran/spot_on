import {UserType, VerifyOtpResponse} from '../../GlobalTypes'
import {
    VerifyOtpAction,
    VerifyOtpActionTypes
} from '../actions/VerifyOtpActions'

const initialState: VerifyOtpResponse = {
    email: '',
    name: '',
    token: '',
    user_type_id: UserType.Employee
}

export const userReducer = (
    state: VerifyOtpResponse = initialState,
    action: VerifyOtpAction
): VerifyOtpResponse => {
    switch (action.type) {
        case VerifyOtpActionTypes.SET_USER_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
