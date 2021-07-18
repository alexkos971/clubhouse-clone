import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import { StepInfo } from "../../StepInfo";
import styles from "./EnterCodeStep.module.scss";
import Axios from "../../../core/axios";


export const EnterCodeStep = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [codes, setCodes] = React.useState(['', '', '', '']);

    const router = useRouter();

    const nextDisable = codes.some(v => !v || codes.length < 4);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = Number(e.target.getAttribute('id'));
        const value = e.target.value;
        
        setCodes(prev => {
            const newArr = [...prev];
            newArr[id] = value;
            return newArr;
        });
        
        if (e.target.nextSibling) {
            (e.target.nextSibling as HTMLInputElement).focus();
        }
    }
    
    const onSubmit = async () => {
        try {
            setIsLoading(true);
            // await Axios.get('/todos');
            router.push('/rooms');
        }
        catch (e) {
            alert('Произошла ошибка...')
            console.log(e)
        }
        setIsLoading(false);
    }

    return (
        <div className={styles.block}>
            
            <StepInfo
                icon="https://image.flaticon.com/icons/png/512/4329/4329713.png"
                title="Enter your activate code"/>

            { !isLoading ? (
            <WhiteBlock className={clsx("mt-40 m-auto", styles.whiteBlock)}>
                <div className={clsx("mb-30", styles.codeInput)}>
                    {
                        codes.map((item, index) => {
                            return (
                                <input
                                    key={index}
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    onChange={handleChangeInput}
                                    id={String(index)}
                                    value={item}/>
                            )
                        })
                    }
                </div>
                <Button icon="arrowRight" disabled={nextDisable} onClick={onSubmit} className="m-auto">
                    Activate
                </Button>

                <p className={clsx("mt-20", styles.policyText)}>
                    By entering your number, you agreeing to our Terms of Service and Privacy Policy. Thnx!
                </p>
            </WhiteBlock>
            ) : (
            <div className="tac">
                <div className="loader"></div>
                <h3 className="mt-5">Activation in progress...</h3>
            </div>)
            }
        </div>
    )
}