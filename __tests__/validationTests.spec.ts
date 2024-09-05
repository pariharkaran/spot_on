import {
    isEmailValid,
    isNonEmpty,
    isPhoneNumberValid,
    isValidNameLength
} from '../app/utils/validation' // Assuming './emailValidator' is the path to your function

describe('isEmailValid', () => {
    it('should return true for valid email addresses', () => {
        const validEmails = [
            'john.doe@example.com',
            'jane_smith@company.org',
            'user+name@domain.co.uk',
            'email.with.dots@sub.domain.com',
            'firstname.lastname@very-long-tld.net'
        ]

        validEmails.forEach(email => {
            expect(isEmailValid(email)).toBe(true)
        })
    })

    it('should return false for invalid email addresses', () => {
        const invalidEmails = [
            'invalid_email',
            'username@nodomain',
            'user@domain@invalid',
            'user name@domain.com',
            'user@domain.',
            'user@.invalid',
            'user@[invalid]'
        ]

        invalidEmails.forEach(email => {
            expect(isEmailValid(email)).toBe(false)
        })
    })
})
describe('isNonEmpty', () => {
    it('should return true for non empty string', () => {
        const validStrings = ['john.doe@example.com', 'jane_smith@company.org']

        validStrings.forEach(item => {
            expect(isNonEmpty(item)).toBe(true)
        })
    })

    it('should return false for empty string', () => {
        const invalidString = ''

        expect(isNonEmpty(invalidString)).toBe(false)
    })
})
describe('isValidNameLength', () => {
    it('should return true for non empty string', () => {
        const validNames = ['Hetansh', 'Patel']

        validNames.forEach(name => {
            expect(isValidNameLength(name)).toBe(true)
        })
    })

    it('should return false for empty string', () => {
        const invalidNames = ['as', 'abcdefghijklmnopqrstuvwxyz']

        invalidNames.forEach(name => {
            expect(isValidNameLength(name)).toBe(false)
        })
    })
})

describe('isPhoneNumberValid', () => {
    it('should return true for valid phone numbers', () => {
        const validPhoneNumbers = [
            '+1234567890', // International format
            '1234567890', // Local format without country code
            '+919876543210', // International with country code for India
            '9876543210' // Local phone number
        ]

        validPhoneNumbers.forEach(phone => {
            expect(isPhoneNumberValid(phone)).toBe(true)
        })
    })

    it('should return false for invalid phone numbers', () => {
        const invalidPhoneNumbers = [
            '', // Empty string
            '123', // Too short
            '+1234abcd567', // Contains letters
            '++1234567890', // Double plus signs
            '+1234567890123456', // Too long
            '+01234567890' // Invalid country code (starts with 0)
        ]

        invalidPhoneNumbers.forEach(phone => {
            expect(isPhoneNumberValid(phone)).toBe(false)
        })
    })
})
