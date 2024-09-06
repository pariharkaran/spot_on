import {StyleSheet} from 'react-native'
import {Colors} from '../../theme/colors'

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: Colors.lightBlue
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15
    }
})
