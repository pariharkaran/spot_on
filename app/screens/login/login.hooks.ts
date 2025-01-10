import {useState} from 'react'
import {useAuthApiServices} from '../../api/auth/useAuthApiServices'
import {Alert, Platform} from 'react-native'
import {useDispatch} from 'react-redux'
import {setUserDetails} from '../../redux/actions/VerifyOtpActions'
import {useNavigation} from '@react-navigation/native'
import {PROFILE, DASH_BOARD} from '../../navigation/navigationRoutes'
import AsyncStorage from '@react-native-async-storage/async-storage'
const isIos = Platform.OS === 'ios'
export const useLogin = () => {
    const [show, setShow] = useState(false)
    const [countryCode, setCountryCode] = useState('+91')
    const [mobileNumber, setMobileNumber] = useState('')
    const [isOtpViewVisible, setIsOtpViewVisible] = useState(false)
    const [isNumberInputInFocus, setIsNumberInputInFocus] = useState(false)
    const [isPhoneNumberCorrect, setIsPhoneNumberCorrect] = useState(false)
    const [otp, setOtp] = useState('')
    const [isLoading, setLoading] = useState(false)

    const {sendOtp, verifyOtpAndLogin, resendOtp} = useAuthApiServices()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const submitSendOtp = async () => {
        try {
            if (!isPhoneNumberCorrect) return

            const response = await sendOtp({
                mobile_no: mobileNumber,
                country_code: countryCode,
                // user_type_id: 3,
                device_type: isIos ? 3 : 2
            })
            console.log('sentOtpResponse: ', response)
            if (response.success) setIsOtpViewVisible(true)
        } catch (e) {
            console.log('Login > submitOtp > catch: ', e)
        }
    }

    const submitVerifyOtp = async () => {
        try {
            const response = await verifyOtpAndLogin({
                country_code: countryCode,
                mobile_no: mobileNumber,
                verification_code: otp,
                user_type_id: 3,
                device_type: 2,
                device_id: '',
                device_fcm_token: ''
            })
            if (response.success) {
                Alert.alert('Login success')
                const userDetails = response.data

                dispatch(setUserDetails(userDetails))
                setIsOtpViewVisible(false)
                setMobileNumber('')
                setIsNumberInputInFocus(false)
                console.log(
                    ' userDetails.data.token >>>>>>>>>>>>> ',
                    userDetails.data.token
                )
                AsyncStorage.setItem('accessToken', userDetails.data.token)
                if (userDetails?.data?.is_profile_filled) {
                    navigation.navigate(DASH_BOARD)
                } else {
                    navigation.navigate(PROFILE)
                }
            }
        } catch (e) {
            console.log('Login > submitVerifyOtp > catch: ', e)
        }
    }

    const submitResendOtp = async () => {
        try {
            console.log('resnet OTP')
            const response = await resendOtp({
                country_code: countryCode,
                mobile_no: mobileNumber,
                user_type_id: 3,
                resend: 1
            })
            console.log('resendOtp: ', response)
            if (response.success) {
                Alert.alert('Resend OTP success')
            }
        } catch (e) {
            console.log('Login > resendOtp > catch: ', e)
        }
    }

    return {
        show,
        setShow,
        countryCode,
        setCountryCode,
        mobileNumber,
        setMobileNumber,
        isOtpViewVisible,
        setIsOtpViewVisible,
        isNumberInputInFocus,
        setIsNumberInputInFocus,
        isPhoneNumberCorrect,
        setIsPhoneNumberCorrect,
        otp,
        setOtp,
        isLoading,
        setLoading,
        submitSendOtp,
        submitVerifyOtp,
        submitResendOtp
    }
}
