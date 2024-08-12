import {Text, View} from 'react-native'
import React from 'react'
import {styles} from './login.styles'
import {locals} from '../assets/locals/en-US'

export const Login: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>{locals.loginText}</Text>
        </View>
    )
}
