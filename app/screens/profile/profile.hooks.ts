import {useEffect, useState} from 'react'
import {useAuthApiServices} from '../../api/auth/useAuthApiServices'

import {Alert} from 'react-native'
type ISections = {
    id: number
    name: string
    isActive: boolean
}

const initialSections: ISections[] = [
    {id: 1, name: 'Personal', isActive: true},
    {id: 2, name: 'Work', isActive: false},
    {id: 3, name: 'Address', isActive: false}
]
export const useProfile = () => {
    const [selectedSection, setSelectedSection] = useState(1)
    const [sections, setSections] = useState<ISections[]>(initialSections)
    // useEffect(() => {
    //     console.log('Sections state updated:', sections)
    //     setSections(sections)
    // }, [sections])
    // Personal
    const [profileImage, setProfileImage] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [countryCode, setCountryCode] = useState('+91')
    const [mobileNumber, setMobileNumber] = useState('')
    const [companyEmailId, setCompanyEmailId] = useState('')
    const [personalEmailId, setPersonalEmailId] = useState('')
    const [gender, setGender] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [pincode, setPincode] = useState('')

    const {employePersonalDetails, employeWorkDetails, employeAddressDetails} =
        useAuthApiServices()
    const submitEmployePersonalDetails = async () => {
        try {
            console.log(' submit persopnal Details called >>>>>>>> ')
            // Ensure all required fields are provided
            if (
                !personalEmailId ||
                !countryCode ||
                !mobileNumber ||
                !firstName ||
                !lastName ||
                !gender ||
                !bloodGroup ||
                !pincode ||
                !profileImage
            ) {
                console.log('Missing required fields')
                return
            }

            const formData = new FormData()
            console.log('check profile image >>>>>>>> ', profileImage)
            const file = {
                uri: profileImage,
                type: 'image/jpeg',
                name: `abc.jpg`
            }
            const blood_group_index = bloodGroup._index + 1

            formData.append('personal_email', personalEmailId)
            formData.append('emg_country_code', countryCode)
            formData.append('emg_mobile_no', mobileNumber)
            formData.append('fname', firstName)
            formData.append('lname', lastName)
            formData.append('profile_pic', file)

            formData.append('gender_id', gender)
            formData.append('blood_group', blood_group_index)
            formData.append('pincode', pincode)

            const response = await employePersonalDetails(formData)

            console.log(
                'check reponse >>>>>> submit employe personal details >>>>> ',
                response
            )
            // if (response.success) {
            //     Alert.alert(response.data.message)
            //     const update_section_id = 2
            //     setSelectedSection(update_section_id)
            //     const updatedSection = sections.map(item => {
            //         console.log('check section >>>>>> ', item)
            //         return {...item, isActive: item.id === 2}
            //     })
            //     setSections(updatedSection)
            //     console.log(' check section ?>>>>>>> ', sections)
            // }
            if (response.success) {
                Alert.alert(response.data.message)
                const update_section_id = 2
                setSelectedSection(update_section_id)

                let tempSections = [...sections]
                tempSections = tempSections.map(item => {
                    console.log('Updating section:', item)
                    return {
                        ...item,
                        isActive: item.id === update_section_id
                    }
                })
                setSections(tempSections)
                console.log('tempSectionstempSections: ', tempSections)
            }
        } catch (err) {
            console.log(' useProfile > submitPersonalDetails > >>>>>> ', err)
        }
    }

    // Work
    const [designation, setDesignation] = useState('')
    const [jobLocation, setJobLocation] = useState('')
    const [workState, setWorkState] = useState('')
    const [workCountry, setWorkCountry] = useState('')
    const submitEmployeWorkDetails = async () => {
        try {
            console.log('submit employee work details called >>>>> ')
            if (!designation || !jobLocation || !workState || !workCountry) {
                console.log('Missing required fields ')
                return
            }

            const formData = new FormData()
            const designation_index = designation._index + 1
            const jobLocation_index = jobLocation._index + 1
            const workState_index = workState._index + 1
            const workCountry_index = workCountry._index + 1

            formData.append('designation_id', designation_index)
            formData.append('work_city_id', jobLocation_index)
            formData.append('work_state_id', workState_index)
            formData.append('work_country_id', workCountry_index)
            console.log(
                ' check form data >>>> submit work details >>>> ',
                formData
            )
            const response = await employeWorkDetails(formData)
            console.log(' submit wmployee work details >>> resp > ', response)
            if (response.success) {
                Alert.alert(response.data.message)
            }
        } catch (err) {
            console.log(
                'use Profile > submit employee ework details > err > ',
                err
            )
        }
    }

    // Addresss

    const [presentAddress, setPresentAddress] = useState('')
    const [permanentAddress, setPermanentAddress] = useState('')
    const submitEmployeAddressDetails = async () => {
        try {
            console.log('submit employee address details called >>> ')
            if (!presentAddress || !permanentAddress) {
                console.log('Missing fields ')
                return
            }
            const formData = new FormData()

            formData.append('present_address', presentAddress)
            formData.append('permanent_address', permanentAddress)

            console.log(
                'check formData > employee address details >>> ',
                formData
            )

            const response = await employeAddressDetails(formData)
            console.log(
                ' submit wmployee address details >>> resp > ',
                response
            )
            if (response.success) {
                Alert.alert(response.data.message)
            }
        } catch (err) {
            console.log('submit employee address details >> err > ', err)
        }
    }
    return {
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
        submitEmployeWorkDetails,
        designation,
        setDesignation,
        jobLocation,
        setJobLocation,
        workState,
        setWorkState,
        workCountry,
        setWorkCountry,
        presentAddress,
        setPresentAddress,
        permanentAddress,
        setPermanentAddress,
        submitEmployeAddressDetails,
        selectedSection,
        setSelectedSection,
        sections,
        setSections
    }
}
