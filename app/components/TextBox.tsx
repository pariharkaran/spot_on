import React, {ReactNode} from 'react'
import {StyleSheet, Text as RNText, TextProps, TextStyle} from 'react-native'

import {Colors} from '../theme/colors'
import fonts from '../constants/fonts'

interface TextBoxProps extends TextProps {
    size?: number
    children: ReactNode
    type?: string
    color?: string
    textAlign?: TextStyle['textAlign']
    style?: TextStyle | TextStyle[]
    numberOfLines?: number
    lineHeight?: number
    fontWeight?: TextStyle['fontWeight']
    letterSpacing?: number
}

export const TextBox: React.FC<TextBoxProps> = ({
    size = 14,
    children,
    type = fonts?.regular,
    color = Colors?.black,
    textAlign,
    style = {},
    numberOfLines = 1,
    lineHeight,
    fontWeight,
    letterSpacing,
    ...props
}) => {
    return (
        <RNText
            numberOfLines={numberOfLines} // This is valid as per the TextProps
            style={[
                styles.font,
                {
                    fontSize: size,
                    color: color,
                    textAlign,
                    fontWeight,
                    lineHeight,
                    fontFamily: type,
                    letterSpacing
                },
                style
            ]}
            {...props}
        >
            {children}
        </RNText>
    )
}

const styles = StyleSheet.create({
    font: {
        textAlignVertical: 'center',
        includeFontPadding: false
    }
})
