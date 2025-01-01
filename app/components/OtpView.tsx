import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Colors} from '../theme/colors'
import {
    responsiveFont,
    responsiveHeight,
    responsiveWidth
} from '../utils/scaling'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {locals} from '../assets/locals/en-US'

interface IOtpViewProps {
    otp: string
    mobileNumber: string
    countryCode: string
    setOtp: React.Dispatch<React.SetStateAction<string>>
    submitVerifyOtp: () => void
    submitResendOtp: () => void
}

export const OtpView: React.FC<IOtpViewProps> = ({
    mobileNumber = '',
    otp = '',
    countryCode = '',
    setOtp,
    submitVerifyOtp,
    submitResendOtp
}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>{locals.verifyPhoneNumber}</Text>
            <Text style={styles.subTitleText}>
                {locals.enterOtpSentToMobile}
                <Text style={styles.mobileNumber}>
                    {countryCode}
                    {` `}
                    {mobileNumber}
                </Text>
            </Text>

            <View>
                <OTPInputView
                    pinCount={6}
                    editable={true}
                    style={styles.otpView}
                    codeInputFieldStyle={styles.otpInput}
                    onCodeFilled={code => {
                        console.log(`Code is ${code}, you are good to go!`)
                        // setOtp(code)
                    }}
                    codeInputHighlightStyle={{
                        borderColor: Colors.primaryBlue
                    }}
                    onCodeChanged={code => {
                        setOtp(code)
                    }}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    submitResendOtp()
                }}
                style={styles.resentOtpContainer}
            >
                <Text style={styles.resentOtpText}>{locals.resendOtp}</Text>
            </TouchableOpacity>

            <View>
                <TouchableOpacity
                    style={[
                        styles.continueButtonContainer,
                        {
                            backgroundColor:
                                otp.length < 6
                                    ? Colors.silver
                                    : Colors.curiousBlue
                        } // Disable color change
                    ]}
                    disabled={otp.length < 6} // Disable the button when there's an error
                    activeOpacity={0.55}
                    onPress={() => {
                        submitVerifyOtp()
                    }}
                >
                    <Text style={styles.continueButtonText}>
                        {locals.verify}
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
        fontSize: responsiveFont(19),
        fontWeight: '600',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(7),
        fontFamily: 'SF-Pro'
    },
    subTitleText: {
        color: Colors.baliHai,
        fontSize: responsiveFont(12),
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(0.5),
        fontFamily: 'SF-Pro'
    },
    mobileNumber: {
        color: Colors.mineShaft,
        fontSize: responsiveFont(12),
        marginLeft: responsiveWidth(7),
        fontFamily: 'SF-Pro'
    },
    otpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    otpView: {
        maxHeight: 50,
        marginTop: responsiveHeight(2),
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
        marginHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1.8),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: 10,
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(3)
    },
    continueButtonText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: responsiveFont(15)
    },
    resentOtpContainer: {
        alignSelf: 'flex-end',
        marginTop: responsiveHeight(1),
        marginHorizontal: responsiveWidth(5)
    },
    resentOtpText: {
        color: Colors.curiousBlue,
        fontSize: responsiveFont(14),
        fontFamily: 'SF-Pro'
    }
})
