import styles from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.overlay}>
            <div className={styles.loading} />
        </div>

    )

}