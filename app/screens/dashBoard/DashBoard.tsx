import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export const DashBoad: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>DashBoard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
