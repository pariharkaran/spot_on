import React from 'react'
import {KeyboardTypeOptions, Platform, TextInput, View} from 'react-native'
import {Colors} from '../theme/colors'
import {responsiveFont} from '../utils/scaling'

const isIos = Platform.OS === 'ios'
interface IBasicTextInputProps {
    keyboardType?: KeyboardTypeOptions
    multiline?: boolean
    numberOfLines?: number
    height?: number
    placeholderText?: string
    value?: string
    onChange?: (text: string) => void
    editable?: boolean
}

export const BasicTextInput: React.FC<IBasicTextInputProps> = ({
    keyboardType,
    multiline,
    numberOfLines,
    height,
    placeholderText,
    value,
    onChange,
    editable
}) => {
    return (
        <View
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: Colors.grey400
            }}
        >
            <TextInput
                value={value}
                textAlignVertical="top"
                keyboardType={keyboardType}
                style={{
                    padding: 15,
                    height: height,
                    color: Colors.mineShaft,
                    fontSize: responsiveFont(14)
                }}
                cursorColor={Colors.primaryBlue}
                multiline={multiline}
                numberOfLines={numberOfLines}
                placeholder={placeholderText}
                placeholderTextColor={Colors.borderGrey}
                onChangeText={onChange}
                editable={editable}
            />
        </View>
    )
}
