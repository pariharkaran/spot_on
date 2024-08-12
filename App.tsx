import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './app/navigation/MainStack'

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default App
