import React from "react";
import clsx from "clsx";
import styles from "./ConversationCard.module.scss";
import { Avatar } from "../Avatar";
import WhiteBlockStyles from "../WhiteBlock/WhiteBlock.module.scss";

interface ConversationCardProps  { 
    title : string, 
    guests : string[], 
    avatars : string[], 
    guestsCount: number, 
    speakersCount: number 
} 


export const ConversationCard: React.FC<ConversationCardProps> = ({ title, guests = [], avatars = [], guestsCount, speakersCount }) => {
    return (
        <div className={clsx(WhiteBlockStyles.block, styles.card, 'mb-30')}>
            <h4 className={styles.title}>{title}</h4>

            <div className={clsx('d-flex mt-10', styles.content)}>
                <div className={clsx(styles.avatars)}>
                    {
                        avatars.map((url, index) => (
                            <Avatar
                                key={index}
                                color='white'
                                width='45px'
                                src={url}
                                className = {clsx(avatars.length > 1 && index == avatars.length - 1 ? 'lastAvatar' : '', 'br-50')}/>
                        ))
                    }
                </div>

                <div className={clsx(styles.info, 'ml-10')}>
                    <ul className={styles.guests}>
                        {guests.map((name, index) => (
                            <li key={index}>
                                {name} <img src="/static/chat.svg" alt="Cloud" width='14' className={clsx('ml-5', styles.icon)}/>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.details}>
                        <li>{guestsCount} <img src="/static/user.svg" alt="guestsCount" width='14'  className='ml-5'/></li>
                        <li className={'ml-15'}>{speakersCount} <img src="/static/megaphone.svg" alt="speakersCount" width='12' className='ml-5'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}