export const isEmailValid = (email: string) => {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(email)
}

export const isPhoneNumberValid = (phoneNumber: string) => {
    const phoneNumberRegex = /^\+?[1-9]\d{9,14}$/

    return phoneNumberRegex.test(phoneNumber)
}

export const isNonEmpty = (value?: string) => {
    return value !== '' && value?.trim() !== ''
}

export const isNonNullableAndNonEmpty = (value: string | undefined | null) => {
    return (
        value !== '' &&
        value?.trim() !== '' &&
        value !== undefined &&
        value !== null
    )
}

export const isValidNameLength = (name: string) => {
    return name.length > 2 && name.length < 15
}
export const isValidPasswordLength = (password: string) => {
    return password.length > 8 && password.length < 15
}
