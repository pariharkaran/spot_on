import React from 'react'
import {KeyboardTypeOptions, TextInput, View} from 'react-native'
import {Colors} from '../theme/colors'

interface IBasicTextInputProps {
    keyboardType?: KeyboardTypeOptions
    multiline?: boolean
    numberOfLines?: number
    height?: number
}

export const BasicTextInput: React.FC<IBasicTextInputProps> = ({
    keyboardType,
    multiline,
    numberOfLines,
    height
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
                keyboardType={keyboardType}
                style={{
                    padding: 15,
                    height: height
                }}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    )
}
