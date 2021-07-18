import clsx from "clsx";
import styles from "./Profile.module.scss"; 
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { BackButton } from "../BackButton";

interface ProfileProps {
    fullname: string,
    username: string,
    avatarUrl: string,
    about: string
}

export const Profile: React.FC<ProfileProps> = ({ fullname, username, avatarUrl, about }) => {
    return (
        <>

            <BackButton href="/rooms" title="Back" arrow/>

            <div className="d-flex ai-c">
                <div className="d-flex ai-c">
                    <Avatar width="100px" src={avatarUrl ? avatarUrl : "https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg"}/>

                    <div className="d-flex flex-direction-column ml-30">
                        <h2 className="mt-0 mb-0">{fullname}</h2>
                        <h3  className={styles.username}>@{username}</h3> 
                    </div>
                </div>
                
                <Button color="blue" className={clsx("ml-30", styles.followButton)}>Follow</Button>
            </div>

            <p className={styles.about}>{about}</p>
        </>
    )
}

