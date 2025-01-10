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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useProfile} from '../profile.hooks'
import {
    Designation,
    Job_Location,
    work_country,
    work_State
} from '../../../GlobalTypes'

export const Work: React.FC = () => {
    const designationData = Object.values(Designation).map(designation => ({
        label: designation,
        value: designation
    }))

    const jobLocationData = Object.values(Job_Location).map(
        jobLocationValues => ({
            label: jobLocationValues,
            value: jobLocationValues
        })
    )

    const workStateData = Object.values(work_State).map(workStateValues => ({
        label: workStateValues,
        value: workStateValues
    }))

    const workCountryData = Object.values(work_country).map(
        workCountryValues => ({
            label: workCountryValues,
            value: workCountryValues
        })
    )
    const {
        submitEmployeWorkDetails,
        designation,
        setDesignation,
        jobLocation,
        setJobLocation,
        workState,
        setWorkState,
        workCountry,
        setWorkCountry
    } = useProfile()
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
                            data={designationData}
                            value={designation}
                            labelField="label"
                            valueField="value"
                            onChange={text => {
                                setDesignation(text)
                            }}
                            placeholder="Select Your Designation"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Job Location</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.grey400,
                            padding: 15,
                            borderRadius: 8
                        }}
                    >
                        <Dropdown
                            data={jobLocationData}
                            value={jobLocation}
                            labelField="label"
                            valueField="value"
                            onChange={text => {
                                setJobLocation(text)
                            }}
                            placeholder="Select Your job location"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Work State</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.grey400,
                            padding: 15,
                            borderRadius: 8
                        }}
                    >
                        <Dropdown
                            data={workStateData}
                            value={workState}
                            labelField="label"
                            valueField="value"
                            onChange={text => {
                                setWorkState(text)
                            }}
                            placeholder="Select Your work state"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Work Country</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.grey400,
                            padding: 15,
                            borderRadius: 8
                        }}
                    >
                        <Dropdown
                            data={workCountryData}
                            value={workCountry}
                            labelField="label"
                            valueField="value"
                            onChange={text => {
                                setWorkCountry(text)
                            }}
                            placeholder="Select Your work country"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        submitEmployeWorkDetails()
                    }}
                    style={styles.saveButton}
                >
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
