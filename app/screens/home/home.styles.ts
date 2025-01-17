import {StyleSheet} from 'react-native'
import {Colors} from '../../theme/colors'
import {responsiveHeight, responsiveWidth} from '../../utils/scaling'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    primaryContainer: {
        backgroundColor: Colors.fireFly,
        paddingHorizontal: 10
    },
    secondaryContainer: {
        backgroundColor: Colors.white,
        padding: 10,
        paddingTop: 0
    },
    currentDateText: {
        padding: 10
    },
    dateNotificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkInCheckOutContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(2),
        marginBottom: responsiveHeight(3)
        // paddingVertical: 15
    },
    todayTimeText: {
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(1),

        fontWeight: '500'
    },
    totalTimeSecondaryContainer: {
        borderColor: Colors.uclaBlue,
        borderBlockColor: Colors.uclaBlue,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1
    },
    totalTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10
    },
    totalTimeText: {
        paddingHorizontal: 8
    },
    checkInViewContainer: {
        backgroundColor: Colors.ufoGreen20,
        borderColor: Colors.ufoGreen,
        borderRadius: 6,
        borderWidth: 1,
        padding: 5,
        paddingRight: responsiveWidth(3)
    },
    checkOutViewContainer: {
        backgroundColor: Colors.chablis,
        borderColor: Colors.bridesMaid,
        borderWidth: 1,
        padding: 5,
        paddingRight: responsiveWidth(3),
        borderRadius: 6
    },
    checkInViewTimeDisplayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingRight: 20
    },
    historyAndViewAllContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 25,
        marginTop: responsiveHeight(3),
        paddingHorizontal: 5
    }
})
