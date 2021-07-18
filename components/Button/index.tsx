import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";


const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGrey,
    blue: styles.buttonBlue
}

const icons = {
    hand: "https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png",
    arrowLeft: "/static/left-arrow black.svg",
    arrowRight: "/static/right-arrow.png"
}

interface ButtonProps {
    children: any;
    disabled?: boolean;
    color?: keyof typeof colors;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    icon?: keyof typeof icons; 
}

export const Button: React.FC<ButtonProps> = ({ children, disabled, color, onClick, className, icon }) => {
    
    return (
        <button 
            onClick={onClick}
            type="button"
            className={clsx(className, styles.button, colors[color])}
            disabled={disabled}>
            {children}
            {icon && <img className="d-ib ml-10" src={icons[icon]}/>}
        </button>
    )
}