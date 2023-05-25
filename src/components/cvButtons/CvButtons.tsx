import styles from "./CvButtons.module.scss"

export default function CvButtons() {
    return <div className={styles.container}>
        <a className={styles.btn} href="https://docs.google.com/document/d/1tYuUHR9nnUZ7a7ZTfLvWgqaefmPHWiyZnlLKZb9-KtE/edit#" target="_blank">CV (Español)</a>
        <a className={styles.btn} href="https://docs.google.com/document/d/12ctMoxiKVPbgcJWsULJBSeWU2VbTTvwXGfzQBLoAPu4/edit#" target="_blank">CV (English)</a>
    </div>
}