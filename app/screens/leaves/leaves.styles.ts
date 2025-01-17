import {StyleSheet} from 'react-native'

import {Colors} from '../../theme/colors'
import {responsiveHeight, responsiveWidth} from '../../utils/scaling'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsiveWidth(3),
        backgroundColor: Colors.white
    },
    leavesBtContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.cultured
    },
    leaveBoxContainer: {
        rowGap: responsiveHeight(1.5),
        columnGap: responsiveWidth(2),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: responsiveHeight(1.7)
    },
    leaveBox: {
        height: responsiveHeight(10.5),
        width: responsiveWidth(44),
        justifyContent: 'space-between',
        paddingLeft: responsiveWidth(3.5),
        paddingVertical: responsiveHeight(1.5),
        borderRadius: responsiveHeight(1.5),
        borderWidth: responsiveHeight(0.1),
        borderColor: Colors.ufoGreen,
        backgroundColor: Colors.ufoGreen20
    },
    viewAllContainer: {
        alignItems: 'center',
        marginVertical: responsiveHeight(3)
    },

    historyToolbar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leaveHistoryListContainer: {
        rowGap: responsiveHeight(2),
        paddingVertical: responsiveHeight(2),
        backgroundColor: Colors.white
    }
})
