import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './app/navigation/MainStack'
import {ThemeProvider} from './app/context/ThemeContext'
import {ApiServicesWrapper} from './app/api/ApiServiceWrapper'
import store from './app/redux/store/store'
import {Provider} from 'react-redux'

const App: React.FC = () => {
    return (
        <ApiServicesWrapper>
            <Provider store={store}>
                <ThemeProvider>
                    <NavigationContainer>
                        <MainStack />
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        </ApiServicesWrapper>
    )
}

export default App
