import {StyleSheet} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFont
} from '../../utils/scaling'
import {Colors} from '../../theme/colors'
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    topContainer: {
        flex: 1
    },
    topImage: {
        position: 'absolute',
        width: '100%'
    },
    bottomContainer: {
        flex: 2,
        backgroundColor: Colors.white,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    logInTitleText: {
        color: '#212121',
        fontSize: responsiveFont(22),
        fontWeight: '600',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(7)
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
    mobileNumberContainer: {
        marginTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(7),
        borderRadius: 10,
        borderColor: Colors.pattensBlue,
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
    overlayContainer: {
        position: 'absolute',
        top: '40%', // Adjust as needed
        left: '50%', // Adjust as needed
        transform: [{translateX: -50}, {translateY: -50}] //Center the overlay image
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
    }
})
