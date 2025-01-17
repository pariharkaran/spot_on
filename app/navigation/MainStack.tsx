import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '../screens/login/Login'
import {DashBoard} from '../screens/dashBoard/DashBoard'
import {Profile} from '../screens/profile/Profile'
import {BottomTabs} from './BottomTabs'
import {LeavesHistory} from '../screens/leaves/LeavesHistory'

import {
    LOGIN,
    DASH_BOARD,
    PROFILE,
    BOTTOM_TABS,
    LEAVES_HISTORY
} from './navigationRoutes'

const Stack = createNativeStackNavigator()

export const MainStack: React.FC = () => {
    const isAccessTokenAvailable = false //add accesstoken retrival logic here

    return (
        <Stack.Navigator
            initialRouteName={isAccessTokenAvailable ? BOTTOM_TABS : LOGIN} //add app's mainscreen in true condition
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={DASH_BOARD} component={DashBoard} />
            <Stack.Screen name={PROFILE} component={Profile} />
            <Stack.Screen name={BOTTOM_TABS} component={BottomTabs} />
            <Stack.Screen name={LEAVES_HISTORY} component={LeavesHistory} />
        </Stack.Navigator>
    )
}
