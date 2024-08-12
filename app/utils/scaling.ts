import {Dimensions, Platform, PixelRatio} from 'react-native'

const {height, width} = Dimensions.get('window')
const scale = width / 320

export const respHeight = (size: number) => {
    return PixelRatio.roundToNearestPixel((height * size) / 100)
}

export const respWidth = (size: number) => {
    return PixelRatio.roundToNearestPixel((width * size) / 100)
}

export const respFont = (size: number) => {
    const newSize = size * scale
    return Platform.OS === 'ios'
        ? Math.round(PixelRatio.roundToNearestPixel(newSize))
        : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}
