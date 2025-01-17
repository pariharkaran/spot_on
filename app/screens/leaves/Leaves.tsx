import React from 'react'
import {ScrollView, View} from 'react-native'

import {Button, LeaveCard, SafeAreaWrapper, TextBox} from '../../components'
import {styles} from './leaves.styles'
import {Colors} from '../../theme/colors'
import fonts from '../../constants/fonts'
import {responsiveHeight, responsiveWidth} from '../../utils/scaling'
import {Filter, PlusInSquare} from '../../assets/svg'
import {LEAVES_HISTORY} from '../../navigation/navigationRoutes'

enum LEAVE_TYPES {
    PL = 'PAID_LEAVE',
    SL = 'SICK_LEAVE',
    CL = 'CASUAL_LEAVE',
    UL = 'UNPLANNED_LEAVE'
}

export const Leaves: React.FC = ({navigation}) => {
    const [isTakenLeaves, setTakenLeaves] = React.useState(false)

    const _rLeaveBox = (type = LEAVE_TYPES.PL) => {
        let leaveTitle = 'Paid Leaves'
        let bgColor = Colors.ufoGreen20
        let borderColor = Colors.ufoGreen

        if (type === LEAVE_TYPES.SL) {
            leaveTitle = 'Sick Leaves'
            bgColor = Colors.deepSaffron20
            borderColor = Colors.deepSaffron
        } else if (type === LEAVE_TYPES.CL) {
            leaveTitle = 'Casual Leaves'
            bgColor = Colors.dodgerBlue20
            borderColor = Colors.dodgerBlue
        } else if (type === LEAVE_TYPES.UL) {
            leaveTitle = 'Unpaid Leaves'
            bgColor = Colors.punchRed20
            borderColor = Colors.punchRed
        }

        return (
            <View
                style={[
                    styles.leaveBox,
                    {backgroundColor: bgColor, borderColor: borderColor}
                ]}
            >
                <TextBox size={16} type={fonts.sfPro} fontWeight={'500'}>
                    {leaveTitle}
                </TextBox>

                <TextBox
                    size={20}
                    color={borderColor}
                    type={fonts.sfPro}
                    fontWeight={'500'}
                >
                    10<TextBox size={14}>/10</TextBox>
                </TextBox>
            </View>
        )
    }

    return (
        <SafeAreaWrapper backgroundColor="red">
            <View style={styles.container}>
                {/**Leaves Buttons container */}
                <View style={styles.leavesBtContainer}>
                    <Button
                        title="Your Leaves"
                        onPress={() => {
                            setTakenLeaves(true)
                        }}
                        titleSize={15}
                        titleColor={
                            isTakenLeaves ? Colors.white : Colors.uclaBlue
                        }
                        height={5.5}
                        titleWeight={'500'}
                        backgroundColor={
                            isTakenLeaves ? Colors.mineShaft : Colors.cultured
                        }
                        containerStyles={{flex: 1}}
                    />
                    <Button
                        title="Requested"
                        onPress={() => {
                            setTakenLeaves(false)
                        }}
                        titleWeight={'500'}
                        titleSize={15}
                        height={5.5}
                        titleColor={
                            isTakenLeaves ? Colors.uclaBlue : Colors.white
                        }
                        backgroundColor={
                            isTakenLeaves ? Colors.cultured : Colors.mineShaft
                        }
                        containerStyles={{flex: 1}}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: responsiveHeight(2.5)
                        }}
                    >
                        <View style={{flex: 1}}>
                            <TextBox
                                size={18}
                                type={fonts.sfPro}
                                fontWeight={'500'}
                            >
                                Your Leave Balance
                            </TextBox>
                        </View>
                        <Button
                            title="Apply Leave"
                            titleSize={11}
                            height={3.5}
                            borderRadius={0.8}
                            titleWeight={'500'}
                            icon={<PlusInSquare />}
                        />
                    </View>
                    <View style={styles.leaveBoxContainer}>
                        {_rLeaveBox()}
                        {_rLeaveBox(LEAVE_TYPES.SL)}
                        {_rLeaveBox(LEAVE_TYPES.CL)}
                        {_rLeaveBox(LEAVE_TYPES.UL)}
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: responsiveHeight(3)
                        }}
                    >
                        <View style={{flex: 1}}>
                            <TextBox
                                size={15}
                                type={fonts.sfPro}
                                fontWeight={'500'}
                            >
                                Leave History
                            </TextBox>
                        </View>
                        <Button
                            title="Filter"
                            titleSize={11}
                            titleColor={Colors.black}
                            height={3.9}
                            borderColor={Colors.black}
                            borderRadius={1}
                            titleWeight={'500'}
                            backgroundColor={Colors.cultured}
                            icon={<Filter />}
                        />
                    </View>

                    <View
                        style={{
                            rowGap: responsiveHeight(2),
                            marginTop: responsiveHeight(2)
                        }}
                    >
                        {new Array(5).fill(0).map((i, index) => {
                            return <LeaveCard key={`leave_card_${index}`} />
                        })}
                    </View>
                    <View style={styles.viewAllContainer}>
                        <Button
                            title="View All"
                            height={4}
                            borderRadius={0.8}
                            titleColor={Colors.weldonBlue}
                            backgroundColor={Colors.lightBlue}
                            containerStyles={{
                                paddingHorizontal: responsiveWidth(3.5)
                            }}
                            onPress={() => {
                                navigation.navigate(LEAVES_HISTORY)
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaWrapper>
    )
}
