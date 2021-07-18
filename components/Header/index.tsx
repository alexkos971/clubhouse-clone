import React from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Header.module.scss";

import { Avatar } from "../Avatar";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
                <div className={clsx("container d-flex ai-c jc-sb")}>
                    <Link href="/rooms">
                        <div className={clsx(styles.headerLogo, "d-flex ai-c cup")}>
                            <img src="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png" className={styles.headerLogoImg} alt="Logo"/>
                            <h4>Clubhouse!</h4>
                        </div>
                    </Link>

                <Link href="/profile/1">
                    <div className="d-flex ai-c cup">
                        <b className="mr-15">Alex Kos</b>
                        <Avatar 
                            src="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg"
                            width="50px"
                            color="#f3efe4"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}
