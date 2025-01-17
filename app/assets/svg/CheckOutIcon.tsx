import * as React from 'react'
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg'
interface ICheckOutIconProps {
    height?: string
    width?: string
    color?: string
}
export const CheckOutIcon: React.FC<ICheckOutIconProps> = ({
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
        <G clipPath="url(#clip0_1853_2819)">
            <Path
                d="M15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C9.31066 2.0625 9.5625 1.81066 9.5625 1.5C9.5625 1.18934 9.31066 0.9375 9 0.9375C4.5472 0.9375 0.9375 4.5472 0.9375 9C0.9375 13.4528 4.5472 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 8.68934 16.8107 8.4375 16.5 8.4375C16.1893 8.4375 15.9375 8.68934 15.9375 9Z"
                fill={color ?? '#46617B'}
            />
            <Path
                d="M9.35225 7.85225C9.13258 8.07192 9.13258 8.42808 9.35225 8.64775C9.57192 8.86742 9.92808 8.86742 10.1477 8.64775L15.9375 2.85799V5.50781C15.9375 5.81847 16.1893 6.07031 16.5 6.07031C16.8107 6.07031 17.0625 5.81847 17.0625 5.50781V1.5C17.0625 1.18934 16.8107 0.9375 16.5 0.9375H12.4922C12.1815 0.9375 11.9297 1.18934 11.9297 1.5C11.9297 1.81066 12.1815 2.0625 12.4922 2.0625H15.142L9.35225 7.85225Z"
                fill={color ?? '#46617B'}
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1853_2819">
                <Rect width={18} height={18} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)
