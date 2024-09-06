import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

interface iDownArrowProps {
    width?: number
    height?: number
}

export const DownArrow: React.FC<iDownArrowProps> = ({height, width}) => {
    return (
        <Svg
            width={height ?? 10}
            height={width ?? 6}
            viewBox="0 0 10 6"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.54 5.66a.751.751 0 01-1.062 0L.23 1.411A.751.751 0 111.291.35L5.01 4.067 8.727.35A.751.751 0 019.79 1.411L5.54 5.661z"
                fill="#212121"
            />
        </Svg>
    )
}
