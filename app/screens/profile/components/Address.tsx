import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '../../../theme/colors'
import {BasicTextInput} from '../../../components/BasicTextInput'
import CheckBox from '@react-native-community/checkbox'

export const Address: React.FC = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Address Details</Text>
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Present Address</Text>
                <BasicTextInput multiline numberOfLines={4} height={120} />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Permanent Address</Text>
                <BasicTextInput multiline numberOfLines={4} height={120} />
            </View>
            <View
                style={{
                    marginTop: 15,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <CheckBox
                    animationDuration={0.05}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                    boxType="square"
                />
                <Text style={styles.nameTagText}>
                    Same as Permanent Address
                </Text>
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    titleContainer: {
        margin: 15
    },
    titleText: {
        fontSize: 22,
        lineHeight: 30,
        fontWeight: '600'
    },
    nameTagText: {
        color: Colors.grey700,
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 5
    },
    saveButton: {
        padding: 15,
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: Colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    saveButtonText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    }
})
