import React from 'react'

import {View} from 'react-native'
import {TextBox} from '../../components'
import {styles} from './home.styles'

export const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextBox>Hello Home</TextBox>
        </View>
    )
}
