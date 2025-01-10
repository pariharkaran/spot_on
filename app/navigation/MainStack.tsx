import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Login} from '../screens/login/Login'
import {DashBoard} from '../screens/dashBoard/DashBoard'
import {Profile} from '../screens/profile/Profile'

import {LOGIN, DASH_BOARD, PROFILE} from './navigationRoutes'

const Stack = createNativeStackNavigator()

export const MainStack: React.FC = () => {
    const isAccessTokenAvailable = false //add accesstoken retrival logic here

    return (
        <Stack.Navigator
            initialRouteName={!isAccessTokenAvailable ? PROFILE : LOGIN} //add app's mainscreen in true condition
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={DASH_BOARD} component={DashBoard} />
            <Stack.Screen name={PROFILE} component={Profile} />
        </Stack.Navigator>
    )
}
