import React from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";
import { Avatar } from "../../Avatar";
import LetteredAvatar from "../../../node_modules/lettered-avatar";

import styles from "./TwitterStep.module.scss";
import {MainContext} from "../../../pages";

export const TwitterStep: React.FC = () => {
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
                icon="https://image.flaticon.com/icons/png/512/978/978067.png"
                title="Do you want import info from Twitter ?"
                className={"pb-20"}/>

            <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
                {/* <Avatar  
                    className="m-auto bdr"
                    width="120px"
                    src={"https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png"}
                    /> */}
                <div className="d-flex jc-c">

                    <LetteredAvatar name={'Alex Kos'} options={{
                        size: 120,
                        twoLetter: true,
                        bgColor: "#e3e3e3"
                    }}/>
                </div>

                <h2 className={"title tac"}>Alex Kos</h2>

                <div className="mb-30 tac mt-15">
                    <label htmlFor="image" className="link cup">
                    </label>
                </div>

                <input id="image" ref={inputFileRef} type="file" hidden/>

                <Button icon="arrowRight" onClick={() => true} className="m-auto">
                    Import from Twitter
                </Button>

                <p onClick={onNextStep} className="link tac cup">Enter my info manuality</p>
            </WhiteBlock>
        </div>
    )
}