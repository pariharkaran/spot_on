import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from 'react-native'
import {styles} from './login.styles'
import React, {useEffect} from 'react'
import {locals} from '../../assets/locals/en-US'
import {CountryPicker} from 'react-native-country-codes-picker'
import {Colors} from '../../theme/colors'
import {PrimaryLogoWhite} from '../../assets/svg'
import {OtpView} from '../../components/OtpView'
import {isPhoneNumberValid} from '../../utils/validation'
import {useLogin} from './login.hooks'
import {DownArrow} from '../../assets/svg'

export const Login: React.FC = () => {
    const {
        show,
        setShow,
        countryCode,
        setCountryCode,
        mobileNumber,
        setMobileNumber,
        isOtpViewVisible,
        isNumberInputInFocus,
        setIsNumberInputInFocus,
        isPhoneNumberCorrect,
        setIsPhoneNumberCorrect,
        otp,
        setOtp,
        submitSendOtp,
        submitVerifyOtp,
        submitResendOtp
    } = useLogin()

    useEffect(() => {
        const phoneNumberValidityCheck =
            mobileNumber.length > 0 && isPhoneNumberValid(mobileNumber)

        setIsPhoneNumberCorrect(phoneNumberValidityCheck)
    }, [mobileNumber])

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={require('../../assets/Images/loginBg.png')}
                    style={[styles.topImage]}
                >
                    <View style={styles.overlayContainer}>
                        <PrimaryLogoWhite />
                    </View>
                </ImageBackground>

                <View style={[styles.bottomContainer]}>
                    {isOtpViewVisible ? (
                        <OtpView
                            otp={otp}
                            setOtp={setOtp}
                            mobileNumber={mobileNumber}
                            submitVerifyOtp={() => {
                                submitVerifyOtp()
                            }}
                            submitResendOtp={() => {
                                submitResendOtp()
                            }}
                        />
                    ) : (
                        <View>
                            <Text style={styles.logInTitleText}>
                                {locals.logInTitle}
                            </Text>
                            <Text style={styles.enterMobileNoText}>
                                {locals.enterMobileNumber}
                            </Text>

                            <View
                                style={[
                                    styles.mobileNumberContainer,
                                    {
                                        borderColor: Colors.borderGrey
                                    }
                                ]}
                            >
                                <TouchableOpacity
                                    onPress={() => setShow(true)}
                                    style={{}}
                                >
                                    <View style={styles.countryCodeContainer}>
                                        <Text style={styles.countryCodeText}>
                                            {countryCode}
                                        </Text>
                                        <DownArrow />
                                    </View>
                                </TouchableOpacity>

                                <TextInput
                                    placeholder={locals.mobileNumber}
                                    placeholderTextColor={Colors.baliHai}
                                    keyboardType="number-pad"
                                    value={mobileNumber}
                                    onChangeText={value => {
                                        setMobileNumber(value)
                                    }}
                                    onBlur={() => {
                                        setIsNumberInputInFocus(false)
                                    }}
                                    onFocus={() => {
                                        setIsNumberInputInFocus(true)
                                    }}
                                    style={styles.mobileNumberTextInput}
                                    maxLength={15}
                                />
                            </View>

                            <Text style={styles.errorTextMessage}>
                                {isNumberInputInFocus && !isPhoneNumberCorrect
                                    ? locals.mobileNoValidation
                                    : ''}
                            </Text>

                            <CountryPicker
                                show={show}
                                initialState={'+91'}
                                lang="en"
                                enableModalAvoiding={true}
                                pickerButtonOnPress={item => {
                                    setCountryCode(item.dial_code)
                                    setShow(false)
                                }}
                                style={{
                                    dialCode: {
                                        color: Colors.black
                                    },
                                    countryName: {
                                        color: Colors.black
                                    },
                                    searchMessageText: {
                                        color: Colors.black
                                    },
                                    textInput: {
                                        color: Colors.black
                                    }
                                }}
                            />

                            <TouchableOpacity
                                style={[
                                    styles.continueButtonContainer,
                                    {
                                        backgroundColor: isPhoneNumberCorrect
                                            ? Colors.curiousBlue
                                            : Colors.silver
                                    } // Disable color change
                                ]}
                                disabled={!isPhoneNumberCorrect} // Disable the button when there's an error
                                onPress={() => {
                                    submitSendOtp()
                                }}
                            >
                                <Text style={styles.continueButtonText}>
                                    {locals.continueButtonText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
