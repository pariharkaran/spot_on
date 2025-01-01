import {StyleSheet} from 'react-native'
import {Colors} from '../../theme/colors'
import {responsiveFont, responsiveWidth} from '../../utils/scaling'

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: Colors.lightBlue
    },
    headerWrapper: {
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        marginHorizontal: responsiveWidth(3),
        color: Colors.textBlack,
        fontSize: responsiveFont(16),
        fontWeight: '600'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15
    }
})
