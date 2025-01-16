import React, {ReactNode} from 'react'
import {StatusBar, SafeAreaView, StyleSheet, StatusBarStyle} from 'react-native'

import {Colors} from '../theme/colors'

interface SafeAreaWrapperProps {
    children: ReactNode
    backgroundColor?: string
    topBarColor?: string
    barStyle?: StatusBarStyle
    statusBarColor?: string
    translucent?: boolean
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
    children,
    backgroundColor = Colors.white,
    barStyle = 'dark-content',
    topBarColor = Colors.white,
    statusBarColor = topBarColor,
    translucent = false
}) => {
    return (
        <>
            <SafeAreaView style={{backgroundColor: topBarColor}} />
            <SafeAreaView
                style={[styles.container, {backgroundColor: backgroundColor}]}
            >
                <StatusBar
                    barStyle={barStyle}
                    translucent={translucent}
                    backgroundColor={statusBarColor}
                />
                {children}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
