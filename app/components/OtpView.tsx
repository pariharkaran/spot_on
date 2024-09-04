import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {Colors} from '../theme/colors'
import {
    responsiveFont,
    responsiveHeight,
    responsiveWidth
} from '../utils/scaling'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {locals} from '../assets/locals/en-US'

export const OtpView: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState(911234567897)
    const [isOtpError, setIsOtpError] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Verify Phone Number</Text>
            <Text style={styles.subTitleText}>
                {`Please enter the OTP to verify your mobile number.\nAn OTP has been sent to +${phoneNumber}`}
            </Text>

            <View>
                <OTPInputView
                    pinCount={6}
                    editable={true}
                    // autoFocusOnLoad
                    style={styles.otpView}
                    codeInputFieldStyle={styles.otpInput}
                    // secureTextEntry
                    onCodeFilled={code => {
                        console.log(`Code is ${code}, you are good to go!`)
                        // setOtp(code)
                    }}
                    codeInputHighlightStyle={{
                        borderColor: Colors.primaryBlue
                    }}
                />
            </View>

            <View>
                <TouchableOpacity
                    style={[
                        styles.continueButtonContainer,
                        {
                            backgroundColor: isOtpError
                                ? Colors.silver
                                : Colors.curiousBlue
                        } // Disable color change
                    ]}
                    disabled={isOtpError} // Disable the button when there's an error
                    activeOpacity={0.55}
                >
                    <Text style={styles.continueButtonText}>
                        {locals.continueButtonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {},
    titleText: {
        color: '#212121',
        fontSize: responsiveFont(22),
        fontWeight: '600',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(7)
    },
    subTitleText: {
        color: Colors.baliHai,
        fontSize: responsiveFont(15),
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1),
        fontWeight: '400'
    },
    otpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    otpView: {
        maxHeight: 50,
        marginTop: 15,
        marginHorizontal: 20
    },
    otpInput: {
        borderWidth: 1,
        borderRadius: 10,
        // borderColor: Colors.darkGray,
        color: Colors.black,
        fontSize: 16
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
    }
})
