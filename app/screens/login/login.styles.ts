import {Platform, StyleSheet} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFont
} from '../../utils/scaling'
import {Colors} from '../../theme/colors'

const isIos = Platform.OS === 'ios'

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    topContainer: {
        flex: 1
    },
    topImage: {
        height: responsiveHeight(100),
        width: responsiveWidth(100)
    },
    bottomContainer: {
        position: 'absolute',
        top: responsiveHeight(isIos ? 28.6 : 26.8),
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.white,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    logInTitleText: {
        color: '#212121',
        fontSize: responsiveFont(19),
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(7),
        fontFamily: 'SF-Pro'
    },
    enterMobileNoText: {
        color: Colors.baliHai,
        fontSize: responsiveFont(12),
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1),
        fontFamily: 'SF-Pro'
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(isIos ? 0 : 0.3)
    },
    countryCodeText: {
        color: Colors.mineShaft,
        fontSize: responsiveFont(14),
        fontFamily: 'SF-Pro',
        marginRight: responsiveWidth(1)
    },
    mobileNumberContainer: {
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(7),
        borderRadius: 10,
        borderWidth: responsiveWidth(0.4),
        paddingVertical: responsiveHeight(1.4),
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row'
    },
    errorTextMessage: {
        color: Colors.punchRed,
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(7),
        fontSize: responsiveFont(11),
        fontFamily: 'SF-Pro'
    },
    mobileNumberTextInput: {
        color: Colors.scorpionGray,
        fontSize: responsiveFont(15),
        marginLeft: responsiveWidth(3),
        padding: 0
    },
    continueButtonContainer: {
        backgroundColor: Colors.curiousBlue,
        marginHorizontal: responsiveWidth(7),
        paddingVertical: responsiveHeight(1.6),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: 10,
        marginTop: responsiveHeight(7),
        marginBottom: responsiveHeight(3)
    },
    continueButtonText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: responsiveFont(15),
        fontFamily: 'SF-Pro'
    },
    overlayContainer: {
        alignSelf: 'center',
        marginTop: responsiveHeight(isIos ? 9 : 7)
    },
    overlayImage: {
        width: 100, // Set the width as per your needs
        height: 100, // Set the height as per your needs
        resizeMode: 'contain'
    },
    SpotOnTextImage: {
        width: 100, // Set the width as per your needs
        height: 50, // Set the height as per your needs
        resizeMode: 'contain'
    },

    countryCodeModal: {
        height: isIos ? responsiveHeight(40) : responsiveHeight(45)
    }
})
