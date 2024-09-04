import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    useWindowDimensions
} from 'react-native'
import {styles} from './login.styles'
import React, {useState} from 'react'
import {locals} from '../../assets/locals/en-US'
import {CountryPicker} from 'react-native-country-codes-picker'
import {Colors} from '../../theme/colors'
import {PrimaryLogoWhite} from '../../assets/locals/svg'
import {OtpView} from '../../components/OtpView'

export const Login: React.FC = () => {
    const [show, setShow] = useState(false)
    const [countryCode, setCountryCode] = useState('+91')
    const [mobileNumber, setMobileNumber] = useState('')
    const [isMobileNumberInvalid, setIsMobileNumberInvalid] = useState(false)
    const [touched, setTouched] = useState(false)
    const [isOtpViewVisible, setIsOtpViewVisible] = useState(false)

    const handleMobileNumberChange = (text: string) => {
        setMobileNumber(text)
        if (touched) {
            validateMobileNumber(text)
        }
    }

    const validateMobileNumber = (text: string) => {
        const trimmedText = text.trim()
        if (trimmedText.length < 10) {
            setIsMobileNumberInvalid(true)
        } else {
            setIsMobileNumberInvalid(false)
        }
    }

    const handleInputBlur = () => {
        setTouched(true)
        validateMobileNumber(mobileNumber)
    }

    const {height} = useWindowDimensions()
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Image
                        source={require('../../assets/Images/loginBg.png')}
                        style={styles.topImage}
                    />
                    <View style={styles.overlayContainer}>
                        <PrimaryLogoWhite />
                    </View>
                </View>
                <KeyboardAvoidingView
                    style={[styles.bottomContainer]}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    // keyboardVerticalOffset={keyboardVerticalOffset}
                >
                    {isOtpViewVisible ? (
                        <OtpView />
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
                                    isMobileNumberInvalid && {
                                        borderColor: Colors.punchRed
                                    }
                                ]}
                            >
                                <TouchableOpacity onPress={() => setShow(true)}>
                                    <Text style={styles.countryCodeText}>
                                        {countryCode}
                                    </Text>
                                </TouchableOpacity>
                                <TextInput
                                    placeholder={locals.mobileNumber}
                                    placeholderTextColor={Colors.scorpionGray}
                                    keyboardType="number-pad"
                                    value={mobileNumber}
                                    onChangeText={text => {
                                        handleMobileNumberChange(text)
                                    }}
                                    onBlur={() => {
                                        handleInputBlur()
                                    }}
                                    style={styles.mobileNumberTextInput}
                                    maxLength={10}
                                />
                            </View>
                            {isMobileNumberInvalid && (
                                <Text style={styles.errorTextMessage}>
                                    {locals.mobileNoValidation}
                                </Text>
                            )}
                            <CountryPicker
                                show={show}
                                initialState={'+91'}
                                lang="en"
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
                                        backgroundColor: isMobileNumberInvalid
                                            ? Colors.silver
                                            : Colors.curiousBlue
                                    } // Disable color change
                                ]}
                                disabled={isMobileNumberInvalid} // Disable the button when there's an error
                            >
                                <Text style={styles.continueButtonText}>
                                    {locals.continueButtonText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}
