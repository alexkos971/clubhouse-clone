import React from "react";
import { useRouter } from "next/router";
import Axios from "../../core/axios";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";

import Room from "../../components/Room";

interface RoomProps {
    title: string,
    quests: Object[],
    speakers: Object[],
    room: Object
}

const RoomPage: React.FC<RoomProps> = ({ room = {} }) => {
    const router = useRouter()

    if (!room || room == undefined) {
        return (
            <>
                <h1>404! Такой страницы нет</h1>
            </>
        )
    }

    return (
        <>
            <Header/>

            <div className={'container mt-40'}>
                <BackButton href="/rooms" arrow title="All rooms"/>

            </div>
            
            <Room title={room.title} />
        </>
    )
}

export default RoomPage;

export const getServerSideProps = async (ctx) => {
    try {
        const { data } = await Axios.get('/rooms.json');
        const room = await data.find(item => item.id === ctx.query.id);

        return {
            props: { room }
        }
    }
    catch (e) {
        console.error(e);
    }
    return {props: {}}
}