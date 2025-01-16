import React, {ReactNode} from 'react'
import {
    GestureResponderEvent,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'

import {TextBox} from './TextBox'
import {Colors} from '../theme/colors'
import {responsiveHeight, responsiveWidth} from '../utils/scaling'
import fonts from '../constants/fonts'

interface IButtonProps {
    title: string
    titleSize?: number
    titleColor?: string
    titleType?: string
    icon?: ReactNode
    onPress?: React.Dispatch<React.SetStateAction<GestureResponderEvent>>
    height?: number
    backgroundColor?: string
    borderColor?: string
    borderRadius?: number
    containerStyles?: object
}

export const Button: React.FC<IButtonProps> = ({
    title,
    titleSize,
    titleColor = Colors.white,
    titleType = fonts.sfPro,
    icon,
    onPress,
    height = 5,
    backgroundColor = Colors.dodgerBlue,
    borderColor = Colors.transparent,
    borderRadius = 1.5,
    containerStyles
}) => {
    return (
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
        >
            {icon && (
                <>
                    {icon}
                    <View style={{width: responsiveWidth(3)}} />
                </>
            )}
            <TextBox color={titleColor} size={titleSize} type={titleType}>
                {title}
            </TextBox>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: responsiveHeight(0.1)
    }
})
