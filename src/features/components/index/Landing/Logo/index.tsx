import styles from './styles.module.css';
import {useEffect, useRef} from "react";

type Props = {
    text: string;
    active: boolean;
}

export default function Logo({ text, active }: Props) {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (active) {
            ref.current?.classList.add(styles.active);
        } else {
            ref.current?.classList.remove(styles.active);
        }
    }, [active]);

    return (
        <h1 className={styles.logo} ref={ref}>
            {text.split('').map((letter, index) =>
                <span key={index} style={{ '--i': index } as React.CSSProperties}>{letter}</span>
            )}
        </h1>
    )
}