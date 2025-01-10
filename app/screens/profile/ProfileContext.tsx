import React, {createContext, useState, useContext, ReactNode} from 'react'

interface ISections {
    id: number
    name: string
    isActive: boolean
}

interface ProfileContextType {
    selectedSection: number
    setSelectedSection: (sectionId: number) => void
    sections: ISections[]
    setSections: (sections: ISections[]) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const useProfileContext = () => {
    const context = useContext(ProfileContext)
    if (!context) {
        throw new Error(
            'useProfileContext must be used within a ProfileProvider'
        )
    }
    return context
}

interface ProfileProviderProps {
    children: ReactNode
}

export const ProfileProvider = ({children}: ProfileProviderProps) => {
    const [selectedSection, setSelectedSection] = useState(1)
    const [sections, setSections] = useState<ISections[]>([
        {id: 1, name: 'Personal', isActive: true},
        {id: 2, name: 'Work', isActive: false},
        {id: 3, name: 'Address', isActive: false}
    ])

    return (
        <ProfileContext.Provider
            value={{selectedSection, setSelectedSection, sections, setSections}}
        >
            {children}
        </ProfileContext.Provider>
    )
}
