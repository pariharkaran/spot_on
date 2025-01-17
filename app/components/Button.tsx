import React, {ReactNode} from 'react'
import {
    GestureResponderEvent,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    View
} from 'react-native'

import {TextBox} from './TextBox'
import {Colors} from '../theme/colors'
import {responsiveHeight, responsiveWidth} from '../utils/scaling'
import fonts from '../constants/fonts'

interface IButtonProps {
    title?: string
    titleSize?: number
    titleColor?: string
    titleType?: string
    titleWeight?: TextStyle['fontWeight']
    icon?: ReactNode
    onPress?: React.Dispatch<React.SetStateAction<GestureResponderEvent>>
    disabled?: boolean
    height?: number
    backgroundColor?: string
    borderColor?: string
    borderRadius?: number
    containerStyles?: object
    badge?: number
}

export const Button: React.FC<IButtonProps> = ({
    title,
    titleSize,
    titleColor = Colors.white,
    titleType = fonts.sfPro,
    titleWeight = '400',
    icon,
    onPress,
    disabled,
    height = 5,
    backgroundColor = Colors.dodgerBlue,
    borderColor = Colors.transparent,
    borderRadius = 1.5,
    containerStyles,
    badge
}) => {
    return (
        <>
            <TouchableOpacity
                style={[
                    styles.container,
                    {
                        height: responsiveHeight(height),
                        backgroundColor: backgroundColor,
                        borderRadius: responsiveHeight(borderRadius),
                        borderColor: borderColor,
                        ...containerStyles
                    }
                ]}
                onPress={onPress}
                activeOpacity={0.8}
                disabled={disabled}
            >
                {icon && (
                    <>
                        {icon}
                        <View style={{width: responsiveWidth(1)}} />
                    </>
                )}
                <TextBox
                    color={titleColor}
                    size={titleSize}
                    type={titleType}
                    fontWeight={titleWeight}
                >
                    {title}
                </TextBox>
            </TouchableOpacity>
            {badge ? (
                <View style={styles.badgeContainer}>
                    <TextBox size={10} color={Colors.white}>
                        {badge}
                    </TextBox>
                </View>
            ) : null}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: responsiveHeight(0.1),
        paddingHorizontal: responsiveWidth(2)
    },
    badgeContainer: {
        height: responsiveHeight(1.5),
        aspectRatio: 1,
        position: 'absolute',
        right: responsiveWidth(0),
        top: responsiveHeight(0),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mineShaft,
        borderRadius: responsiveHeight(10)
    }
})
