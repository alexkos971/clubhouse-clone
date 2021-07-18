import React from "react";
import Link from "next/link"

interface BackButtonProps {
    title: string,
    href: string,
    arrow?: boolean
}

export const BackButton: React.FC<BackButtonProps> = ({title, href, arrow}) => {
    return (
        <Link href={href}>
            <div className="d-flex ai-c cup">
                {arrow && 
                    <img src="/static/left-arrow black.svg" className="mr-10" alt="Back" style={{width: 20, height: 20}}/>
                }
                <h3>{title}</h3>
            </div>
        </Link>
    )
}