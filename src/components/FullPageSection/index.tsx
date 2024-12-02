import React from "react";
import styles from "./styles.module.css";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    as?: React.ElementType;
};

export default function FullPageSection({children, className = '', as = 'section'}: Props) {
    const Component = as;

    return (
        <Component className={`${styles.wrapper} ${className}`}>
            {children}
        </Component>
    )
}