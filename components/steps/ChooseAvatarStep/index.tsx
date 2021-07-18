import React from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";
import { Avatar } from "../../Avatar";

import styles from "./ChooseAvatarStep.module.scss";
import {MainContext} from "../../../pages";

export const ChooseAvatarStep: React.FC = () => {
    const { onNextStep } = React.useContext(MainContext);
    const inputFileRef = React.useRef<HTMLInputElement>(null);
    const [ avatarUrl, setAvatarUrl ] = React.useState<string>("https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg");

    const handleChangeImg = (e: Event): void => {
        const file = (e.target as HTMLInputElement).files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            console.log(imageUrl)
            setAvatarUrl(imageUrl);
        }
    }

    React.useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener("change", handleChangeImg)
        }
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="https://image.flaticon.com/icons/png/512/3322/3322105.png"
                title="Okay, Alex Kos!"
                description="How this photo?"/>

            <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
                <Avatar  
                    className="m-auto"
                    width="120px"
                    src={avatarUrl}
                    />

                <div className="mb-30 tac mt-15">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>

                <input id="image" ref={inputFileRef} type="file" hidden/>

                <Button icon="arrowRight" onClick={onNextStep} className="m-auto">
                    Next
                </Button>
            </WhiteBlock>
        </div>
    )
}