import React from 'react'

import {FlatList, View} from 'react-native'
import {Button, SafeAreaWrapper, TextBox} from '../../components'
import {styles} from './home.styles'
import {useHome} from './Home.hooks'
import {Colors} from '../../theme/colors'
import {Notification} from '../../assets/svg/Notification'
import {CheckInIcon} from '../../assets/svg/CheckInIcon'
import {CheckOutIcon} from '../../assets/svg/CheckOutIcon'
import LinearGradient from 'react-native-linear-gradient'
import {ClockIcon} from '../../assets/svg/ClockIcon'
import {HistoryViewStaticIcon} from '../../assets/svg/HistoryViewStaticIcon'
import {responsiveHeight, responsiveWidth} from '../../utils/scaling'
export const Home: React.FC = () => {
    const {currentDate, checkIn, checkOut, checkInCalled} = useHome()

    const dummyData = [
        {
            id: '1',
            date: '18 Sept, 2024',
            checkIn: '10:00 AM',
            checkOut: '6:30 PM',
            totalTime: '8h:30m'
        },
        {
            id: '2',
            date: '18-19 Sept, 2024',
            checkIn: '9:00 PM',
            checkOut: '5:30 AM',
            totalTime: '8h:30m'
        },
        {
            id: '3',
            date: '18 Sept, 2024',
            checkIn: '10:00 AM',
            checkOut: '6:30 PM',
            totalTime: '8h:30m'
        },
        {
            id: '4',
            date: '18 Sept, 2024',
            checkIn: '10:00 AM',
            checkOut: '6:30 PM',
            totalTime: '8h:30m'
        }
    ]

    const DateAndNotification = () => {
        return (
            <View style={styles.dateNotificationContainer}>
                <TextBox
                    size={18}
                    style={styles.currentDateText}
                    color={Colors.white}
                >
                    {currentDate}
                </TextBox>
                <Notification height="32" width="32" />
            </View>
        )
    }

    const CheckInCheckOutButtons = () => {
        return (
            <View style={styles.checkInCheckOutContainer}>
                <Button
                    title="Check In"
                    titleSize={16}
                    backgroundColor={
                        checkInCalled ? Colors.bigStone : Colors.ufoGreen
                    }
                    titleColor={checkInCalled ? Colors.grey700 : Colors.white}
                    icon={
                        <CheckInIcon
                            color={
                                checkInCalled ? Colors.grey700 : Colors.white
                            }
                        />
                    }
                    containerStyles={{flex: 1}}
                    height={7}
                    onPress={() => {
                        checkIn()
                    }}
                    disabled={checkInCalled ? true : false}
                />
                <View style={{padding: 8}}></View>
                <Button
                    backgroundColor={
                        checkInCalled ? Colors.punchRed : Colors.bigStone
                    }
                    title="Check Out"
                    titleSize={16}
                    titleColor={checkInCalled ? Colors.white : Colors.grey700}
                    icon={
                        <CheckOutIcon
                            color={
                                checkInCalled ? Colors.white : Colors.grey700
                            }
                        />
                    }
                    containerStyles={{flex: 1}}
                    height={7}
                    onPress={() => {
                        checkOut()
                    }}
                    disabled={checkInCalled ? false : true}
                />
            </View>
        )
    }

    const TotalTimeViewer = () => {
        return (
            <View style={styles.totalTimeSecondaryContainer}>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#54ABFF', '#1E90FF']}
                    style={styles.totalTimeContainer}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <ClockIcon />
                        <TextBox
                            size={15}
                            color={Colors.white}
                            style={styles.totalTimeText}
                            fontWeight={'500'}
                        >
                            Total time
                        </TextBox>
                    </View>

                    <TextBox
                        size={18}
                        color={Colors.white}
                        style={styles.totalTimeText}
                        fontWeight={'600'}
                    >
                        00h:00m
                    </TextBox>
                </LinearGradient>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10
                    }}
                >
                    <View style={styles.checkInViewContainer}>
                        <TextBox fontWeight={500}>Check In</TextBox>
                        <View style={styles.checkInViewTimeDisplayContainer}>
                            <CheckInIcon
                                color={Colors.greenHaze}
                                height={'20'}
                                width={'20'}
                            />
                            <TextBox size={18} fontWeight={500}>
                                {' '}
                                00:00 AM
                            </TextBox>
                        </View>
                    </View>

                    <View style={styles.checkOutViewContainer}>
                        <TextBox fontWeight={500}>Check Out</TextBox>
                        <View style={styles.checkInViewTimeDisplayContainer}>
                            <CheckOutIcon
                                color={Colors.black}
                                height={'20'}
                                width={'20'}
                            />
                            <TextBox size={18} fontWeight={500}>
                                {' '}
                                00:00 AM
                            </TextBox>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const TimeTrackingList = () => {
        const renderItem = ({item}) => {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 15
                    }}
                >
                    {/* Left Section: Icon and Date */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <HistoryViewStaticIcon />
                        <View
                            style={{
                                marginLeft: responsiveWidth(3.5),
                                marginBottom: responsiveHeight(0.4)
                            }}
                        >
                            <TextBox
                                size={13}
                                color={Colors.frenchGray}
                                fontWeight={400}
                                style={{marginBottom: responsiveHeight(0.4)}}
                            >
                                {item.date}
                            </TextBox>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 1
                                }}
                            >
                                <CheckInIcon
                                    height={'14'}
                                    width={'14'}
                                    color={Colors.greenHaze}
                                />
                                <TextBox size={14} fontWeight={600}>
                                    {' '}
                                    {item.checkIn}{' '}
                                </TextBox>
                                <View style={{paddingHorizontal: 2}}></View>
                                <CheckOutIcon
                                    height={'14'}
                                    width={'14'}
                                    color={Colors.punchRed}
                                />
                                <TextBox size={14} fontWeight={600}>
                                    {' '}
                                    {item.checkOut}{' '}
                                </TextBox>
                            </View>
                        </View>
                    </View>

                    {/* Right Section: Total Time */}
                    <View style={{alignItems: 'flex-end'}}>
                        <TextBox
                            size={13}
                            color={Colors.frenchGray}
                            fontWeight={400}
                        >
                            total time
                        </TextBox>
                        <TextBox size={14} fontWeight={600}>
                            8h:30m
                        </TextBox>
                    </View>
                </View>
            )
        }
        return (
            <FlatList
                data={dummyData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        )
    }
    return (
        <SafeAreaWrapper topBarColor={Colors.fireFly} barStyle="light-content">
            <View style={styles.container}>
                <View style={styles.primaryContainer}>
                    <DateAndNotification />
                    <CheckInCheckOutButtons />
                </View>
                <View style={styles.secondaryContainer}>
                    <View>
                        <TextBox
                            size={15}
                            fontWeight={500}
                            style={styles.todayTimeText}
                        >
                            Today’s Time
                        </TextBox>
                        <TotalTimeViewer />
                    </View>

                    <View>
                        <View style={styles.historyAndViewAllContainer}>
                            <TextBox>History</TextBox>
                            <TextBox
                                color={Colors.dodgerBlue}
                                style={{textDecorationLine: 'underline'}}
                            >
                                View All
                            </TextBox>
                        </View>
                        <TimeTrackingList />
                    </View>
                </View>
            </View>
        </SafeAreaWrapper>
    )
}
