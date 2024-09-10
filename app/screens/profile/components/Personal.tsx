import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    TextInput,
    View,
    ScrollView
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Colors} from '../../../theme/colors'
import {DashedCircleAvatar, UploadImageButton} from '../../../assets/svg'
import {PhoneNumberInput} from '../../../components/PhoneNumberInput'
import {isPhoneNumberValid} from '../../../utils/validation'
import {BasicTextInput} from '../../../components/BasicTextInput'
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group'
import {Dropdown} from 'react-native-element-dropdown'
import {BloodGroup} from '../../../GlobalTypes'

export const Personal: React.FC = () => {
    const {width} = useWindowDimensions()

    const [show, setShow] = useState(false)
    const [countryCode, setCountryCode] = useState('+91')
    const [mobileNumber, setMobileNumber] = useState('')
    const [isNumberInputInFocus, setIsNumberInputInFocus] = useState(false)
    const [isPhoneNumberCorrect, setIsPhoneNumberCorrect] = useState(false)

    useEffect(() => {
        const phoneNumberValidityCheck =
            mobileNumber.length > 0 && isPhoneNumberValid(mobileNumber)

        setIsPhoneNumberCorrect(phoneNumberValidityCheck)
    }, [mobileNumber])

    const [selectedId, setSelectedId] = useState('')

    const bloodGroupData = Object.values(BloodGroup).map(bloodGroup => ({
        label: bloodGroup,
        value: bloodGroup
    }))

    const radioButtons: RadioButtonProps[] = [
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'male',
            ...(selectedId === '1'
                ? {
                      borderColor: Colors.primaryBlue,
                      borderSize: 5,
                      color: Colors.white
                  }
                : {
                      borderColor: Colors.primaryLightBlue,
                      borderSize: 2,
                      color: Colors.white
                  })
        },
        {
            id: '2',
            label: 'Female',
            value: 'female',
            ...(selectedId === '2'
                ? {
                      borderColor: Colors.primaryBlue,
                      borderSize: 5,
                      color: Colors.white
                  }
                : {
                      borderColor: Colors.primaryLightBlue,
                      borderSize: 2,
                      color: Colors.white
                  })
        },
        {
            id: '3',
            label: 'Other',
            value: 'other',
            ...(selectedId === '3'
                ? {
                      borderColor: Colors.primaryBlue,
                      borderSize: 5,
                      color: Colors.white
                  }
                : {
                      borderColor: Colors.primaryLightBlue,
                      borderSize: 2,
                      color: Colors.white
                  })
        }
    ]

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Personal Details</Text>
            </View>
            <View style={[styles.profileImageContainer, {width: width * 0.7}]}>
                <Text style={styles.profileImageText}>Profile Image</Text>
                <View style={styles.uploadProfileContainer}>
                    <View>
                        <DashedCircleAvatar />
                    </View>
                    <View>
                        <Text style={styles.uploadText}>
                            Please upload only JPG, JPEG, PNG files, File size
                            more than 5 MB not allowed.
                        </Text>
                        <TouchableOpacity style={styles.uploadImageButton}>
                            <UploadImageButton />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.formContainer}>
                <View style={styles.nameContainer}>
                    <View>
                        <Text style={styles.nameTagText}>First Name</Text>
                        <TextInput
                            style={[styles.nameInput, {width: width * 0.45}]}
                        />
                    </View>
                    <View>
                        <Text style={styles.nameTagText}>Last Name</Text>
                        <TextInput
                            style={[styles.nameInput, {width: width * 0.45}]}
                        />
                    </View>
                </View>
            </View>
            <View style={{marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Mobile Number</Text>
                <PhoneNumberInput
                    setShow={setShow}
                    setCountryCode={setCountryCode}
                    setIsNumberInputInFocus={setIsNumberInputInFocus}
                    setMobileNumber={setMobileNumber}
                    mobileNumber={mobileNumber}
                    show={show}
                    isPhoneNumberCorrect={isPhoneNumberCorrect}
                    isNumberInputInFocus={isNumberInputInFocus}
                    countryCode={countryCode}
                />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Company Email ID</Text>
                <BasicTextInput />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Personal Email ID</Text>
                <BasicTextInput />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Gender</Text>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={id => {
                        setSelectedId(id)
                    }}
                    selectedId={selectedId}
                    layout="row"
                />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Blood Group</Text>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: Colors.grey400,
                        padding: 15,
                        borderRadius: 8
                    }}
                >
                    <Dropdown
                        data={bloodGroupData}
                        labelField="label"
                        valueField="value"
                        onChange={() => {}}
                        placeholder="Select your blood group"
                    />
                </View>
            </View>
            <View style={{marginTop: 15, marginHorizontal: 15}}>
                <Text style={styles.nameTagText}>Pincode</Text>
                <BasicTextInput />
            </View>

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
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
    profileImageContainer: {
        marginHorizontal: 15
    },
    profileImageText: {
        color: Colors.grey700,
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 20
    },
    uploadProfileContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    uploadText: {},
    uploadImageButton: {
        marginTop: 10
    },
    divider: {
        height: 1,
        backgroundColor: Colors.borderGrey900
    },
    formContainer: {
        margin: 15
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    nameTagText: {
        color: Colors.grey700,
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 5
    },
    nameInput: {
        borderColor: Colors.grey400,
        borderWidth: 1,
        padding: 15,
        borderRadius: 8
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
