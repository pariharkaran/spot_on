import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './app/navigation/MainStack'
import {ThemeProvider} from './app/context/ThemeContext'
import {ApiServicesWrapper} from './app/api/ApiServiceWrapper'

const App: React.FC = () => {
    return (
        <ApiServicesWrapper>
            <ThemeProvider>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </ThemeProvider>
        </ApiServicesWrapper>
    )
}

export default App
