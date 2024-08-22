import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native'
import React from 'react'
import {styles} from './welcome.styles'
import {PrimaryLogo} from '../../assets/locals/svg'
import {locals} from '../../assets/locals/en-US'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {LOGIN} from '../../navigation/navigationRoutes'
export const Welcome: React.FC = () => {
    const {height} = useWindowDimensions()
    const navigation = useNavigation()
    const handleLoginPress = () => {
        console.log('Navigate to login Screen')
        navigation.navigate(LOGIN)
    }
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.logoContainer, {height: height / 1.8}]}>
                <PrimaryLogo />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome back!</Text>
                <Text style={styles.welcomeText}>Login to your account</Text>
                <Text style={styles.secondaryText}>
                    Enjoy the best managing experience
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.65}
                    onPress={() => {
                        handleLoginPress()
                    }}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#2FD4FC', '#1B59F9']}
                        style={styles.loginButton}
                    >
                        <Text style={styles.loginButtonText}>
                            {locals.loginText}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.guestButton}>
                <Text style={styles.guestButtonText}>Continue as a guest</Text>
            </TouchableOpacity>
        </View>
    )
}
