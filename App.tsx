import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './app/navigation/MainStack'
import {ThemeProvider} from './app/context/ThemeContext'
import {ApiServicesWrapper} from './app/api/ApiServiceWrapper'
import {store, persistor} from './app/redux/store/store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ProfileProvider} from './app/screens/profile/ProfileContext'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ProfileProvider>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <ApiServicesWrapper>
                            <ThemeProvider>
                                <MainStack />
                            </ThemeProvider>
                        </ApiServicesWrapper>
                    </NavigationContainer>
                </PersistGate>
            </ProfileProvider>
        </Provider>
    )
}

export default App
