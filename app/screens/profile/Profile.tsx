import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import {styles} from './profile.styles'
import {BackArrowRound} from '../../assets/svg'
import {ProfileSections} from './components/ProfileSections'
import {useProfileContext} from './ProfileContext'

export const Profile: React.FC = () => {
    const {selectedSection} = useProfileContext() // Use context here

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
