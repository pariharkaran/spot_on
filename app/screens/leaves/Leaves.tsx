import React from 'react'

import {View} from 'react-native'
import {TextBox} from '../../components'
import {styles} from './leaves.styles'

export const Leaves: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextBox>Hello Leaves</TextBox>
        </View>
    )
}
