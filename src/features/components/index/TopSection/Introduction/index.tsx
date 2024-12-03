import styles from "./styles.module.css";
import React from "react";
import useObserver from "../../../../../hooks/useObserver.ts";

export default function Introduction() {

    const ref = React.useRef<HTMLDivElement>(null);

    useObserver(() => {
        ref.current?.classList.add(styles.active);
    }, ref, { threshold: 1.0 });

    return (
        <div ref={ref} className={styles.wrapper}>
            <img className={styles.icon} src="/icon.svg" alt="自分のアイコン" />
            <div className={styles.divider}></div>
            <div className={styles.description}>
                <h3>ちゅるり</h3>
                <p className={styles.affiliation}>筑波大学情報メディア創成学類 4 年</p>
                <p>たべること・寝ることがすき</p>
            </div>
        </div>
    )
}