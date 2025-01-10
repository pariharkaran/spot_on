import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '../../../theme/colors'
import {BasicTextInput} from '../../../components/BasicTextInput'
import CheckBox from '@react-native-community/checkbox'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useProfile} from '../profile.hooks'

export const Address: React.FC = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const {
        presentAddress,
        setPresentAddress,
        permanentAddress,
        setPermanentAddress,
        submitEmployeAddressDetails
    } = useProfile()

    // Handle checkbox toggle
    const handleCheckBoxToggle = (newValue: boolean) => {
        setToggleCheckBox(newValue)
        if (newValue) {
            setPermanentAddress(presentAddress) // Sync permanent address with present address
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Address Details</Text>
                </View>

                {/* Present Address Input */}
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Present Address</Text>
                    <BasicTextInput
                        multiline
                        numberOfLines={4}
                        height={120}
                        placeholderText={'Enter Your present address Here'}
                        value={presentAddress}
                        onChange={text => {
                            setPresentAddress(text)
                            if (toggleCheckBox) {
                                setPermanentAddress(text) // Update permanent address dynamically
                            }
                        }}
                    />
                </View>

                {/* Permanent Address Input */}
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Permanent Address</Text>
                    <BasicTextInput
                        multiline
                        numberOfLines={4}
                        height={120}
                        placeholderText={'Enter Your permanent address Here'}
                        value={permanentAddress}
                        onChange={text => setPermanentAddress(text)}
                        editable={!toggleCheckBox} // Disable input when checkbox is checked
                    />
                </View>

                {/* Checkbox */}
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
                        style={{borderBlockColor: Colors.borderGrey900}}
                        animationDuration={0.5}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={handleCheckBoxToggle}
                        boxType="square"
                        tintColor={Colors.borderGrey900}
                        lineWidth={2.0}
                        onAnimationType="one-stroke"
                        offAnimationType="one-stroke"
                        tintColors={{
                            true: Colors.primaryBlue,
                            false: Colors.borderGrey900
                        }}
                    />
                    <Text style={styles.nameTagText}>
                        Same as Present Address
                    </Text>
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        submitEmployeAddressDetails()
                    }}
                >
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
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
        fontWeight: '600',
        color: Colors.mineShaft
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
