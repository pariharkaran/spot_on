import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    TextInput,
    View,
    ScrollView,
    Platform,
    Image
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Colors} from '../../../theme/colors'
import {DashedCircleAvatar, UploadImageButton} from '../../../assets/svg'
import {PhoneNumberInput} from '../../../components/PhoneNumberInput'
import {isPhoneNumberValid} from '../../../utils/validation'
import {BasicTextInput} from '../../../components/BasicTextInput'
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group'
import {Dropdown} from 'react-native-element-dropdown'
import {BloodGroup, BloodGroupIndex} from '../../../GlobalTypes'
import {responsiveFont} from '../../../utils/scaling'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useProfile} from '../profile.hooks'
import ImagePicker from 'react-native-image-crop-picker'
import {useProfileContext} from '../ProfileContext'

const isIos = Platform.OS === 'ios'
export const Personal: React.FC = ({onPress}) => {
    const {width} = useWindowDimensions()

    const [show, setShow] = useState(false)

    const [isNumberInputInFocus, setIsNumberInputInFocus] = useState(false)
    const [isPhoneNumberCorrect, setIsPhoneNumberCorrect] = useState(false)

    const {
        profileImage,
        setProfileImage,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        countryCode,
        setCountryCode,
        mobileNumber,
        setMobileNumber,
        companyEmailId,
        setCompanyEmailId,
        personalEmailId,
        setPersonalEmailId,
        gender,
        setGender,
        bloodGroup,
        setBloodGroup,
        pincode,
        setPincode,
        submitEmployePersonalDetails,
        setSelectedSection,
        sections,
        setSections,
        selectedSection
    } = useProfile()

    const {setSelectedSection: temp} = useProfileContext()

    useEffect(() => {
        const phoneNumberValidityCheck =
            mobileNumber.length > 0 && isPhoneNumberValid(mobileNumber)

        setIsPhoneNumberCorrect(phoneNumberValidityCheck)
    }, [mobileNumber])

    const bloodGroupData = Object.values(BloodGroup).map(bloodGroup => ({
        label: bloodGroup,
        value: bloodGroup
    }))

    const radioButtons: RadioButtonProps[] = [
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'male',
            ...(gender === '1'
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
            ...(gender === '2'
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
            ...(gender === '3'
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
        <KeyboardAwareScrollView>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Personal Details</Text>
                </View>
                <View
                    style={[styles.profileImageContainer, {width: width * 0.7}]}
                >
                    <Text style={styles.profileImageText}>Profile Image</Text>
                    <View style={styles.uploadProfileContainer}>
                        <View>
                            {profileImage ? (
                                <Image
                                    source={{uri: profileImage}}
                                    style={{
                                        width: 80, // Adjust as needed
                                        height: 80, // Adjust as needed
                                        borderRadius: 50, // For circular shape
                                        borderWidth: 1,
                                        borderColor: Colors.primaryBlue
                                    }}
                                />
                            ) : (
                                <DashedCircleAvatar />
                            )}
                        </View>
                        <View>
                            <Text style={styles.uploadText}>
                                Please upload only JPG, JPEG, PNG files, File
                                size more than 5 MB not allowed.
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    ImagePicker.openPicker({
                                        width: 300,
                                        height: 400,
                                        cropping: true,
                                        cropperCircleOverlay: true
                                    })
                                        .then(image => {
                                            setProfileImage(image.path)
                                        })
                                        .catch(err => {
                                            console.log(
                                                'Error > image picker >>>>>>>> ',
                                                err
                                            )
                                        })
                                }}
                                style={styles.uploadImageButton}
                            >
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
                                value={firstName}
                                onChangeText={text => {
                                    setFirstName(text)
                                }}
                                cursorColor={Colors.primaryBlue}
                                style={[
                                    styles.nameInput,
                                    {width: width * 0.45, color: Colors.black}
                                ]}
                            />
                        </View>
                        <View>
                            <Text style={styles.nameTagText}>Last Name</Text>
                            <TextInput
                                value={lastName}
                                onChangeText={text => {
                                    setLastName(text)
                                }}
                                cursorColor={Colors.primaryBlue}
                                style={[
                                    styles.nameInput,
                                    {width: width * 0.45, color: Colors.black}
                                ]}
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
                    <BasicTextInput
                        value={companyEmailId}
                        onChange={text => {
                            setCompanyEmailId(text)
                        }}
                    />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Personal Email ID</Text>
                    <BasicTextInput
                        value={personalEmailId}
                        onChange={text => {
                            setPersonalEmailId(text)
                        }}
                    />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Gender</Text>
                    <RadioGroup
                        labelStyle={{color: Colors.black}}
                        radioButtons={radioButtons}
                        onPress={id => {
                            // setSelectedId(id)
                            setGender(id)
                        }}
                        // selectedId={selectedId}

                        selectedId={gender}
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
                            value={bloodGroup}
                            data={bloodGroupData}
                            labelField="label"
                            valueField="value"
                            onChange={text => {
                                console.log(
                                    'on change > blood group ?>>>>>> ',
                                    text
                                )
                                setBloodGroup(text)
                            }}
                            placeholder="Select your blood group"
                            placeholderStyle={{color: Colors.black}}
                            itemTextStyle={{color: Colors.black}}
                            selectedTextStyle={{color: Colors.black}}
                        />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 15}}>
                    <Text style={styles.nameTagText}>Pincode</Text>
                    <BasicTextInput
                        placeholderText={'Enter your Pincode'}
                        value={pincode}
                        onChange={text => {
                            setPincode(text)
                        }}
                    />
                </View>

                <TouchableOpacity
                    onPress={async () => {
                        await submitEmployePersonalDetails()
                        //WIP
                        // setSelectedSection(2)
                        // const updatedSections = sections.map(item => {
                        //     return {...item, isActive: item.id === 2}
                        // })
                        // console.log('updatedSections', updatedSections)
                        // setSections(updatedSections)
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
    profileImageContainer: {
        marginHorizontal: 15
    },
    profileImageText: {
        color: Colors.grey700,
        fontSize: responsiveFont(13),
        fontWeight: '500',
        lineHeight: 20
    },
    uploadProfileContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    uploadText: {
        color: Colors.borderGrey,
        fontSize: responsiveFont(isIos ? 11 : 12)
    },
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
        marginBottom: 20,
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
