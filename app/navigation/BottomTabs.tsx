import React from 'react'
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {
    Home as HomeIcon,
    Profile as ProfileIcon,
    Leaves as LeaveIcon,
    Expense as ExpenseIcon
} from '../assets/svg'

import {EXPENSE, HOME, LEAVES, PROFILE} from './navigationRoutes'
import {Home} from '../screens/home/Home'
import {Profile} from '../screens/profile/Profile'
import {SafeAreaWrapper, TextBox} from '../components'
import {Colors} from '../theme/colors'
import {Expense} from '../screens/expense/Expense'
import {Leaves} from '../screens/leaves/Leaves'
import fonts from '../constants/fonts'

const Tabs = createBottomTabNavigator()

export const BottomTabs: React.FC = () => {
    return (
        <SafeAreaWrapper>
            <Tabs.Navigator
                tabBar={props => <TabBar {...props} />}
                screenOptions={{headerShown: false}}
            >
                <Tabs.Screen name={HOME} component={Home} />
                <Tabs.Screen name={LEAVES} component={Leaves} />
                <Tabs.Screen name={EXPENSE} component={Expense} />
                <Tabs.Screen name={PROFILE} component={Profile} />
            </Tabs.Navigator>
        </SafeAreaWrapper>
    )
}

function TabBar({state, descriptors, navigation}) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name
                const isFocused = state.index === index
                console.log(
                    '\nrouteroute: ',
                    index,
                    isFocused,
                    JSON.stringify(state)
                )

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                let icon = <HomeIcon isSelected={isFocused} />
                if (label === LEAVES) {
                    icon = <LeaveIcon isSelected={isFocused} />
                } else if (label === EXPENSE) {
                    icon = <ExpenseIcon isSelected={isFocused} />
                } else if (label === PROFILE) {
                    icon = <ProfileIcon isSelected={isFocused} />
                }

                return (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        disabled={isFocused}
                        onPress={onPress}
                        style={styles.tabContainer}
                    >
                        {icon}
                        <View style={{height: 4}} />
                        <TextBox
                            color={isFocused ? Colors.black : Colors.dabysGrey}
                            type={fonts.sfPro}
                            size={12}
                        >
                            {label}
                        </TextBox>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 5,
        borderTopColor: '#DBDFE9',
        borderTopWidth: 1,
        backgroundColor: Colors.white
    },
    tabContainer: {height: 60, justifyContent: 'center', alignItems: 'center'}
})
