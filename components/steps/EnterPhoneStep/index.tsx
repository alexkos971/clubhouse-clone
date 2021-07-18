import React from "react";
import clsx from "clsx";
import NumberFormat from "react-number-format";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterPhoneStep.module.scss";
import {MainContext} from "../../../pages";

type inputValueState = {
    formattedValue: string;
    value: string;
    nextDisabled: boolean;
}

export const EnterPhoneStep = () => {
    const { onNextStep } = React.useContext(MainContext);
    const [ inputValue, setInputValue ] = React.useState<inputValueState>({} as inputValueState);

    const nextDisabled = !inputValue.formattedValue || inputValue.formattedValue.includes('_');
    console.log(inputValue);

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="https://image.flaticon.com/icons/png/512/2208/2208224.png"
                title="Enter your phone #" 
                description="We will send you a confirmation code"/>

            <WhiteBlock className={clsx("mt-30 m-auto", styles.whiteBlock)}>
                <div className={clsx("mb-30", styles.input)}>

                    <img src="https://image.flaticon.com/icons/png/512/2151/2151386.png" alt="Flag" className={styles.flag}/>
                    <NumberFormat
                        className={clsx("field", styles.field)}
                        format="+### (##) ##-##-###"
                        mask="_"
                        placeholder="+380 (11) 11-11-111"
                        value={inputValue.value}
                        onValueChange={({ formattedValue, value}) => setInputValue({ formattedValue, value })}/>
                </div>

                <Button icon="arrowRight" disabled = {nextDisabled} onClick={onNextStep} className="m-auto">
                    Next
                </Button>

                <p className={clsx("mt-20", styles.policyText)}>
                    By entering your numbere, you agreeing to our Terms of Service and Privacy Policy. Thnx!
                </p>
            </WhiteBlock>
        </div>
    )
}