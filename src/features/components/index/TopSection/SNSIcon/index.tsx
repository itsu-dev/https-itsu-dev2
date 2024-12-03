import React from "react";
import styles from "./styles.module.css";

type Props = {
    id: string;
    link: string;
    icon: React.ReactNode;
    color: string;
    backgroundColor: string;
}

export default function SNSIcon({ id, link, icon, backgroundColor, color }: Props) {
    return (
        <a className={styles.icon} href={link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor, color }}>
            {icon}<span>{id}</span>
        </a>
    );
}