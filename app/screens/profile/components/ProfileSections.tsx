import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    useWindowDimensions
} from 'react-native'
import React, {useState} from 'react'
import {Colors} from '../../../theme/colors'
import {Personal} from './Personal'
import {Work} from './Work'
import {Address} from './Address'

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

export const ProfileSections: React.FC = () => {
    const {width} = useWindowDimensions()

    const [selectedSection, setSelectedSection] = useState(1)

    const [sections, setSections] = useState<ISections[]>(initialSections)

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

    const SectionItem: React.FC<ISections> = ({id, isActive, name}) => {
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

                    setSections(updatedSections)
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
        <View style={styles.mainContainer}>
            <View>
                <FlatList<ISections>
                    data={sections}
                    renderItem={({item}) => <SectionItem {...item} />}
                    contentContainerStyle={styles.tabsContainer}
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
