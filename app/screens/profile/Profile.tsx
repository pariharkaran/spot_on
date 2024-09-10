import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import {styles} from './profile.styles'
import {BackArrowRound} from '../../assets/svg'
import {ProfileSections} from './components/ProfileSections'

export const Profile: React.FC = () => {
    return (
        <View style={styles.parentContainer}>
            <SafeAreaView style={styles.headerContainer}>
                <View style={styles.headerWrapper}>
                    <BackArrowRound />
                    <Text style={styles.headerText}>Fill Profile</Text>
                </View>
            </SafeAreaView>
            <View style={styles.mainContainer}>
                <ProfileSections />
            </View>
        </View>
    )
}
