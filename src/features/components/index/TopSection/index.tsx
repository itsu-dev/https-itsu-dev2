import FullPageSection from "../../../../components/FullPageSection";
import styles from "./styles.module.css";
import RecentImages from "./RecentImages";

export default function TopSection() {
    return (
        <FullPageSection as="div" className={styles.wrapper}>
            <RecentImages />
        </FullPageSection>
    );
}