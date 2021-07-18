import React from "react";
import clsx from "clsx";
import styles from "./Room.module.scss";
import Link from "next/link";
import { Button } from "../Button"

interface RoomProps {
    title: string
}

const Room: React.FC<RoomProps> = ({ title }) => {

    return (
        <div className={clsx(styles.wrapper)}>
            <div className="d-flex ai-c jc-sb">
                <h1 className={styles.title}>{title || "Here must be a title of this conversations"}</h1>

                <div className={clsx('d-flex ai-c', styles.actionButtons)}>
                    <Link href="/rooms">
                        <a>
                            <Button color="gray" className={styles.leaveButton} icon="hand">
                                Leave quietly
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="users">
                {/* {users.map((obj) => (
                    <User  {...obj}/>
                ))} */}
            </div>
        </div>
    )
}

export default Room;