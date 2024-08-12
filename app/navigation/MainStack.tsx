import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Login} from '../screens/Login'

import {LOGIN} from './navigationRoutes'

const Stack = createNativeStackNavigator()

export const MainStack: React.FC = () => {
    const isAccessTokenAvailable = false //add accesstoken retrival logic here

    return (
        <Stack.Navigator
            initialRouteName={isAccessTokenAvailable ? LOGIN : LOGIN} //add app's mainscreen in true condition
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={LOGIN} component={Login} />
        </Stack.Navigator>
    )
}
