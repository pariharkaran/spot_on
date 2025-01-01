import React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {Colors} from '../theme/colors'
import {locals} from '../assets/locals/en-US'
import {CountryPicker} from 'react-native-country-codes-picker'
import {
    responsiveFont,
    responsiveHeight,
    responsiveWidth
} from '../utils/scaling'
const isIos = Platform.OS === 'ios'

interface IPhoneNumberInputProps {
    setShow: (value: React.SetStateAction<boolean>) => void
    setIsNumberInputInFocus: (value: React.SetStateAction<boolean>) => void
    setCountryCode: (value: React.SetStateAction<string>) => void
    setMobileNumber: (value: React.SetStateAction<string>) => void
    countryCode: string
    mobileNumber: string
    isNumberInputInFocus: boolean
    isPhoneNumberCorrect: boolean
    show: boolean
}

export const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = ({
    setCountryCode,
    setIsNumberInputInFocus,
    setMobileNumber,
    setShow,
    countryCode,
    mobileNumber,
    isNumberInputInFocus,
    isPhoneNumberCorrect,
    show
}) => {
    return (
        <View>
            <View
                style={[
                    styles.mobileNumberContainer,
                    {
                        borderColor: Colors.borderGrey
                    }
                ]}
            >
                <TouchableOpacity onPress={() => setShow(true)}>
                    <Text style={styles.countryCodeText}>{countryCode}</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder={locals.mobileNumber}
                    placeholderTextColor={Colors.borderGrey}
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
                    cursorColor={Colors.primaryBlue}
                />
            </View>
            {isNumberInputInFocus && !isPhoneNumberCorrect && (
                <Text style={styles.errorTextMessage}>
                    {locals.mobileNoValidation}
                </Text>
            )}
            <CountryPicker
                show={show}
                initialState={'+91'}
                lang="en"
                enableModalAvoiding={true}
                pickerButtonOnPress={item => {
                    setCountryCode(item.dial_code)
                    setShow(false)
                }}
                onBackdropPress={() => {
                    setShow(false)
                }}
                style={{
                    modal: styles.countryCodeModal,
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
        </View>
    )
}

const styles = StyleSheet.create({
    mobileNumberContainer: {
        // marginTop: responsiveHeight(4), // modify through props if needed
        // marginHorizontal: responsiveWidth(7), // modify through props if needed
        borderRadius: 10,
        borderWidth: responsiveWidth(0.4),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row'
    },
    errorTextMessage: {
        color: Colors.punchRed,
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(7),
        fontSize: responsiveFont(12),
        fontWeight: '500'
    },
    mobileNumberTextInput: {
        color: Colors.scorpionGray,
        fontSize: responsiveFont(16),
        marginLeft: responsiveWidth(3),
        padding: 0
    },
    continueButtonContainer: {
        backgroundColor: Colors.curiousBlue,
        marginHorizontal: responsiveWidth(7),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: 10,
        marginTop: responsiveHeight(8),
        marginBottom: responsiveHeight(3)
    },
    continueButtonText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: responsiveFont(15)
    },
    enterMobileNoText: {
        color: Colors.baliHai,
        fontSize: responsiveFont(15),
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1),
        fontWeight: '400'
    },

    countryCodeText: {
        color: Colors.mineShaft,
        fontSize: responsiveFont(17)
    },
    countryCodeModal: {
        height: isIos ? responsiveHeight(40) : responsiveHeight(45)
    }
})
