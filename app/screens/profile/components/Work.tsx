import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {Colors} from '../../../theme/colors'
import {Dropdown} from 'react-native-element-dropdown'
import {BasicTextInput} from '../../../components/BasicTextInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export const Work: React.FC = () => {
    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'}
    ]

    return (
        <KeyboardAwareScrollView>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Work Details</Text>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Designation</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.grey400,
                            padding: 15,
                            borderRadius: 8
                        }}
                    >
                        <Dropdown
                            data={data}
                            labelField="label"
                            valueField="value"
                            onChange={() => {}}
                            placeholder="Select Your Designation"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Job Location</Text>
                    <BasicTextInput />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Work State</Text>
                    <BasicTextInput />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Work Country</Text>
                    <BasicTextInput />
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
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
