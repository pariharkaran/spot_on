import * as React from 'react'
import Svg, {Rect, Path} from 'react-native-svg'

interface IBackArrowRoundProps {
    width?: string
    height?: string
}

export const BackArrowRound: React.FC<IBackArrowRoundProps> = ({
    width,
    height
}) => (
    <Svg
        width={width ?? 32}
        height={height ?? 32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Rect width={32} height={32} rx={16} fill="#212121" />
        <Path
            d="M23 16H9M9 16L15 22M9 16L15 10"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
