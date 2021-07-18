import React from "react";
import { Button } from "../../Button";
import Link from "next/link"
import { WhiteBlock } from "../../WhiteBlock";
import styles from "./WelcomeStep.module.scss";
import {MainContext} from "../../../pages";


export const WelcomeStep: React.FC  = () => {
    const { onNextStep } = React.useContext(MainContext)
 
    return (
        <WhiteBlock className={styles.block}>
            <h3 className={styles.title}>
                <img className={styles.handWaweImg} src="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png" alt="Celebration"/>
                Welcome to Clubhouse!
            </h3>

            <p>
                Laboris commodo irure magna officia adipisicing velit velit consequat aliquip in. 
                Reprehenderit magna velit consequat nisi excepteur. 
                Amet occaecat officia dolore mollit esse sunt amet adipisicing aliquip est exercitation est adipisicing. 
            </p>

            <div>
                <Button icon="arrowRight" onClick={onNextStep} className={'m-auto'}>
                    Get Your username    
                </Button>        
            </div>

            <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
        </WhiteBlock>
    )
}