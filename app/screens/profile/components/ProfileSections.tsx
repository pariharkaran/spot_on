import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    useWindowDimensions
} from 'react-native'
import React, {useEffect} from 'react'
import {Colors} from '../../../theme/colors'
import {Personal} from './Personal'
import {Work} from './Work'
import {Address} from './Address'
import {useProfile} from '../profile.hooks'

type ISections = {
    id: number
    name: string
    isActive: boolean
}
export const ProfileSections: React.FC = () => {
    const {width} = useWindowDimensions()
    const {selectedSection, setSelectedSection, sections, setSections} =
        useProfile()

    const SelectedSection: React.FC = () => {
        switch (selectedSection) {
            case 1:
                return <Personal />
            case 2:
                return <Work />
            case 3:
                return <Address />
            default:
                return <Personal />
        }
    }
    console.log(
        'ProfileSections > check profile section tsx >> sections >> ',
        sections
    )
    const SectionItem: React.FC<ISections> = ({id, isActive, name}) => {
        console.log('selectedSection params hook', sections, name)

        return (
            <TouchableOpacity
                style={[
                    styles.tabButton,
                    {
                        width: width * 0.31,
                        backgroundColor: isActive
                            ? Colors.primaryBlue
                            : Colors.white
                    }
                ]}
                onPress={() => {
                    setSelectedSection(id)
                    const updatedSections = sections.map(item => {
                        return {...item, isActive: item.id === id}
                    })

                    setSections(prevSections =>
                        prevSections.map(item => ({
                            ...item,
                            isActive: item.id === id
                        }))
                    )

                    // setSections(updatedSections)
                }}
            >
                <Text
                    style={[
                        styles.tabButtonText,
                        {color: isActive ? Colors.white : Colors.textGrey}
                    ]}
                >
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.mainContainer, {marginTop: 10}]}>
            <View>
                <FlatList<ISections>
                    data={sections}
                    renderItem={({item}) => <SectionItem {...item} />}
                    contentContainerStyle={styles.tabsContainer}
                    extraData={sections}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.divider} />
            <View style={styles.selectedSections}>
                <SelectedSection />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 10
    },
    tabButton: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderRadius: 60,
        alignItems: 'center'
    },
    tabButtonText: {},
    selectedSections: {
        flex: 1
    },
    divider: {
        height: 1,
        backgroundColor: Colors.lightBlue,
        marginVertical: 15
    }
})
