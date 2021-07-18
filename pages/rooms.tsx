import React from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import {ConversationCard} from "../components/ConversationCard";
import Axios from "../core/axios";

const rooms = ({ rooms = [] }) => {

    return (
        <>
            <Header />
            <div className="container">

                <div className="mt-40 d-flex ai-c jc-sb">
                    <h1>All conversations</h1>
                    <Button className="m0" color="green">+ Create room</Button>
                </div>

                <div className="mt-20 grid">
                    {
                        rooms.map((item) => (
                            <Link href={`/rooms/${item.id}`} key={item.id}>
                                <a className="d-flex">
                                <ConversationCard 
                                    title={item.title}
                                    guests={item.guests}
                                    avatars={item.avatars}
                                    guestsCount={item.guestsCount}
                                    speakersCount={item.speakersCount}/>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
    
}

export default rooms;

export const getServerSideProps = async () => {
    try {
        const { data } = await Axios.get("/rooms.json");
        return { props: {rooms: data}};
    }
    catch (e) {
        console.error(e)
    }
    return {props: {rooms: []}}
}