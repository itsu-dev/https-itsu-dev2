import styles from './styles.module.css';
import Logo from "./Logo";
import {useEffect, useState} from "react";
import FullPageSection from "../../../../components/FullPageSection";

export default function Landing() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 500);
    }, []);

    return (
        <FullPageSection className={styles.landing}>
            <Logo text={"itsu.dev"} active={active} />
        </FullPageSection>
    )
}