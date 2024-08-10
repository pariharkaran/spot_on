import 'react-native-gesture-handler'
import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const App: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>App</Text>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText: {
        fontSize: 30,
        color: 'black'
    }
})
