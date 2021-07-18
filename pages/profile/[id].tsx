import React from "react";
import { useRouter } from "next/router";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";

interface ProfileProps {
    input: string, 
    user: null,
    loading: boolean
}


const ProfilePage: React.FC<ProfileProps> = (props: ProfileProps) => {
    const [ value, setValue ] = React.useState<string>("");
    const router = useRouter();

    const { id } = router.query;

    // const enterValue = (e: React.KeyboardEvent): void => {
    //     if (e.key === "Enter" && value.length !== 0) {
    //         router.push(`/profile/${value}`)
    //     }
    // }

    return (
        <>
            <Header />
            <div className="container mt-40">
                <Profile 
                    fullname="Alex Kos" 
                    username="alex_kos" 
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, tempore eum rem mollitia earum!"
                    avatarUrl="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" />
            </div>
        </>
    )
}

export default ProfilePage;