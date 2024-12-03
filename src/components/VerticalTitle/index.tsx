import styles from "./styles.module.css";
import useObserver from "../../hooks/useObserver.ts";
import {useRef} from "react";

type Props = {
    text: string;
}

export default function VerticalTitle({ text }: Props) {
    const ref = useRef<HTMLHeadingElement>(null);

    useObserver(() => {
        ref.current?.classList.add(styles.active);
    }, ref, {threshold: 0.7})

    return (
        <h2 ref={ref} className={styles.title}><span>{text}</span></h2>
    );
}