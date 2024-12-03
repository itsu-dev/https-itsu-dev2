import {useEffect, useState} from "react";
import {marked} from "marked";
import styles from "./styles.module.css";

type Props = {
    url: string;
    className?: string;
}

export default function MarkdownContainer({url, className}: Props) {
    const [html, setHtml] = useState<string>("Loading...");

    useEffect(() => {
        (async () => {
            const html = await (await fetch(url)).text();
            const markedHtml = await marked(html);
            setHtml(markedHtml);
        })();
    } , []);

    return (
        <article dangerouslySetInnerHTML={{__html: html}} className={`${styles.wrapper} ${className}`}>
        </article>
    )
}