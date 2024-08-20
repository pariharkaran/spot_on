import {StyleSheet} from 'react-native'
import {Colors} from '../theme/colors'
//margin left 20
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeContainer: {
        marginLeft: 20,
        gap: 5
    },
    welcomeText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30
    },
    secondaryText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: Colors.primaryBlue
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginTop: 25,
        gap: 15
    },
    loginButton: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    loginButtonText: {
        fontWeight: '700',
        color: Colors.white
    },
    registerButton: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.primaryBlue
    },
    registerButtonText: {
        fontWeight: '700',
        color: Colors.primaryBlue
    },
    guestButton: {marginTop: 45, alignSelf: 'center'},
    guestButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primaryBlue
    }
})
