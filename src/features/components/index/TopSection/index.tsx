import FullPageSection from "../../../../components/FullPageSection";
import styles from "./styles.module.css";
import RecentImages from "./RecentImages";
import Introduction from "./Introduction";
import React from "react";

export default function TopSection() {
    const ref = React.useRef<HTMLTableSectionElement>(null);
    return (
        <FullPageSection as="div" className={styles.wrapper}>
            <RecentImages />
            <section ref={ref} className={styles.introduction}>
                <h2 className="hidden">自己紹介</h2>
                <Introduction />
            </section>
        </FullPageSection>
    );
}