import * as React from 'react'
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg'

interface ICheckInIconProps {
    width?: string
    height?: string
    color?: string
}
export const CheckInIcon: React.FC<ICheckInIconProps> = ({
    height,
    width,
    color
}) => (
    <Svg
        width={width ?? 18}
        height={height ?? 18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <G clipPath="url(#clip0_1853_2809)">
            <Path
                d="M15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C9.31066 2.0625 9.5625 1.81066 9.5625 1.5C9.5625 1.18934 9.31066 0.9375 9 0.9375C4.5472 0.9375 0.9375 4.5472 0.9375 9C0.9375 13.4528 4.5472 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 8.68934 16.8107 8.4375 16.5 8.4375C16.1893 8.4375 15.9375 8.68934 15.9375 9Z"
                fill={color ?? 'white'}
            />
            <Path
                d="M16.1477 2.64775C16.3674 2.42808 16.3674 2.07192 16.1477 1.85225C15.9281 1.63258 15.5719 1.63258 15.3523 1.85225L9.5625 7.64201V4.99219C9.5625 4.68153 9.31066 4.42969 9 4.42969C8.68934 4.42969 8.4375 4.68153 8.4375 4.99219V9C8.4375 9.31066 8.68934 9.5625 9 9.5625H13.0078C13.3185 9.5625 13.5703 9.31066 13.5703 9C13.5703 8.68934 13.3185 8.4375 13.0078 8.4375H10.358L16.1477 2.64775Z"
                fill={color ?? 'white'}
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1853_2809">
                <Rect width={18} height={18} rx={5} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)
