import React, {CSSProperties} from "react";
import styles from "./styles.module.css";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    as?: React.ElementType;
    style?: CSSProperties;
};

export default function FullPageSection({children, className = '', as = 'section', style}: Props) {
    const Component = as;

    return (
        <Component className={`${styles.wrapper} ${className}`} style={style}>
            {children}
        </Component>
    )
}