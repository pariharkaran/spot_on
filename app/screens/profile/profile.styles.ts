import {StyleSheet} from 'react-native'
import {Colors} from '../../theme/colors'

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: Colors.lightBlue
    },
    headerWrapper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        marginHorizontal: 15,
        color: Colors.textBlack,
        fontSize: 16,
        fontWeight: '600'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15
    }
})
