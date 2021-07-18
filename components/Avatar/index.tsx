import clsx from "clsx";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    src: string,
    width: string,
    height?: string,
    className?: string,
    isVoice?: boolean,
    color?: string 
}

export const Avatar: React.FC<AvatarProps> = ({ width, height, src, isVoice, className, color }) => {
    return (
        <div 
            className={clsx("mt-5", styles.avatar, className)} 
            style={{ backgroundImage: `url(${src})`, width: width, height: height ? height: width, color: color ? color: null}}>
        </div>
    )
}