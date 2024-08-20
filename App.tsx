import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './app/navigation/MainStack'
import {ThemeProvider} from './app/context/ThemeContext'

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default App
