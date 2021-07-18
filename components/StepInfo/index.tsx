import clsx from "clsx";
import styles from "./StepInfo.module.scss"; 

interface StepInfoProps {
    title: string;
    description?: string;
    icon: string;
    className?: string;
}

export const StepInfo: React.FC<StepInfoProps> = ({ icon, title, description, className }) => {
    return (
        <div className={clsx(className, styles.block, 'text-center')}>
            <div>
                <img className={styles.img} src={icon} alt="StepPicture"/>
            </div>

            <b className={clsx("mt-15", styles.title)}>{title}</b>
            { description && <p className={styles.description}>{description}</p> }
        </div>
    )
}

