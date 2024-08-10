import 'react-native'
import React from 'react'
import {it} from '@jest/globals'
import {create} from 'react-test-renderer'
import App from '../App'

it('renders login screen correctly', () => {
    const tree = create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
})
