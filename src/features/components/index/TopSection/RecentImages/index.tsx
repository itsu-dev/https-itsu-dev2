import styles from "./styles.module.css";

export default function RecentImages() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.background}>
                <img className={styles.background} src="/test.webp" alt="写真"/>
            </div>
            <div className={styles.overlay}>
                <h2 className={styles.title}>最近の写真</h2>
                <p className={styles.cc}>クリエイティブ・コモンズ 表示（CC BY 4.0）</p>
            </div>
            <img src="/test.webp" alt="写真"/>
        </section>
    );
}