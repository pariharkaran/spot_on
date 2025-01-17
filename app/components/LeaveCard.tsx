import React from 'react'
import {StyleSheet, View} from 'react-native'

import {TextBox} from './TextBox'
import {Colors} from '../theme/colors'
import {responsiveHeight, responsiveWidth} from '../utils/scaling'
import {Button} from './Button'
import {Edit} from '../assets/svg'

interface ILeaveCardProps {
    containerStyles?: object
}

export const LeaveCard: React.FC<ILeaveCardProps> = ({containerStyles}) => {
    return (
        <View style={[styles.container, {...containerStyles}]}>
            <View style={styles.header}>
                <TextBox size={16} fontWeight={'500'}>
                    Sick Leave
                </TextBox>
                <Button
                    title="Approved"
                    height={3}
                    titleSize={13}
                    borderRadius={0.5}
                    titleColor={Colors.ufoGreen}
                    backgroundColor={Colors.ufoGreen15}
                    disabled={true}
                />
            </View>
            <TextBox
                size={13}
                color={Colors.silverFoil}
                style={{marginTop: responsiveHeight(0.5)}}
            >
                Date
            </TextBox>
            <TextBox
                size={13}
                fontWeight={'500'}
                style={{marginTop: responsiveHeight(0.2)}}
            >
                30 Dec, 2024 - 2 Jan, 2025
            </TextBox>
            <View style={styles.divider} />
            <View style={styles.header}>
                <TextBox size={15} fontWeight={'500'}>
                    4{' '}
                    <TextBox size={13} fontWeight={'400'}>
                        Days
                    </TextBox>
                </TextBox>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextBox size={12} color={Colors.silverFoil}>
                        Applied On 19 March 2024
                    </TextBox>
                    <View style={{marginHorizontal: responsiveWidth(0.5)}} />
                    <Edit />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(14.5),
        marginHorizontal: responsiveWidth(0.5),
        paddingVertical: responsiveHeight(1.3),
        paddingHorizontal: responsiveWidth(3),
        backgroundColor: Colors.white,
        borderRadius: responsiveHeight(1.2),
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 1,
        borderColor: Colors.lightBlue
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    divider: {
        marginVertical: responsiveHeight(1.2),
        borderTopWidth: responsiveHeight(0.1),
        borderColor: Colors.antiFlashWhite
    }
})
