import styles from "./styles.module.css";

export default function RecentImages() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.background}>
                <img className={styles.background} src="/test.webp" alt="写真"/>
            </div>
            <div className={styles.overlay}>
                <h2 className={styles.title}>Recent Photo</h2>
                <p className={styles.cc}>Licensed under CC BY 4.0</p>
            </div>
            <img src="/test.webp" alt="写真"/>
        </section>
    );
}