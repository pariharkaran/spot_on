import React from 'react'

import {View} from 'react-native'
import {TextBox} from '../../components'
import {styles} from './expense.styles'

export const Expense: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextBox>Hello Expense</TextBox>
        </View>
    )
}
