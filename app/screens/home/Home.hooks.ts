// Home.hooks.ts
import {useState, useEffect} from 'react'

export const useHome = () => {
    const [currentDate, setCurrentDate] = useState('')
    const [checkInCalled, setCheckInCalled] = useState(false)
    useEffect(() => {
        const getCurrentDate = () => {
            const today = new Date()
            const options = {day: '2-digit', month: 'short', year: 'numeric'}
            const formattedDate = new Intl.DateTimeFormat(
                'en-US',
                options
            ).format(today)
            return formattedDate
        }

        setCurrentDate(getCurrentDate())
    }, [])

    const checkIn = () => {
        console.log('Check In Called ------------- ')
        setCheckInCalled(true)
    }
    const checkOut = () => {
        console.log('Check out called ---------------')
        setCheckInCalled(false)
    }
    return {
        currentDate,
        checkIn,
        checkOut,
        checkInCalled,
        setCheckInCalled
    }
}
