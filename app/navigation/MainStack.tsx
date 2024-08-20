import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Welcome} from '../screens/login/Welcome'

import {WELCOME} from './navigationRoutes'

const Stack = createNativeStackNavigator()

export const MainStack: React.FC = () => {
    const isAccessTokenAvailable = false //add accesstoken retrival logic here

    return (
        <Stack.Navigator
            initialRouteName={isAccessTokenAvailable ? WELCOME : WELCOME} //add app's mainscreen in true condition
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={WELCOME} component={Welcome} />
        </Stack.Navigator>
    )
}
