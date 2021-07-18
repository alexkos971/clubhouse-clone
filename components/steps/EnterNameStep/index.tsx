import React from "react";
import clsx from "clsx";
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import { StepInfo } from "../../StepInfo";
import {MainContext} from "../../../pages";


import styles from "./EnterNameStep.module.scss";

export const EnterNameStep: React.FC = () => {
    const { onNextStep } = React.useContext(MainContext);
    const [inputValue, setInputValue] = React.useState<string>("");

    const nextDisabled = !inputValue;

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onClickNextStep = () => {
        onNextStep();
    }

    return (
        <div>
            <StepInfo
                icon="https://image.flaticon.com/icons/png/512/2922/2922688.png"
                title="Whats your full name ?"
                description="People use real names on Clubhouse" />
            
            <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
                <div className="mb-30">
                    <input className="field" placeholder="Enter your name" value={inputValue} onChange={handleChangeInput}/>
                </div>

                <Button disabled={nextDisabled} icon="arrowRight" onClick={onClickNextStep} className="m-auto">
                    Next
                </Button>
            </WhiteBlock>
        </div>
    )
}