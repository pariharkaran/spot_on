import * as React from 'react'
import Svg, {Circle, Path} from 'react-native-svg'

interface IDashedCircleAvatarProps {
    width?: number
    height?: number
}

export const DashedCircleAvatar: React.FC<IDashedCircleAvatarProps> = ({
    width,
    height
}) => (
    <Svg
        width={width ?? 74}
        height={height ?? 74}
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={37} cy={37} r={36} stroke="#1B82E6" strokeDasharray="3 3" />
        <Path
            d="M55.5142 57.5716C55.5142 51.2597 47.225 46.143 36.9999 46.143C26.7747 46.143 18.4856 51.2597 18.4856 57.5716M36.9999 39.2859C30.6092 39.2859 25.4285 34.1691 25.4285 27.8573C25.4285 21.5455 30.6092 16.4287 36.9999 16.4287C43.3906 16.4287 48.5713 21.5455 48.5713 27.8573C48.5713 34.1691 43.3906 39.2859 36.9999 39.2859Z"
            stroke="#EFEFEF"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
