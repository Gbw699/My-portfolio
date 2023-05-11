import Image from "next/image"
import styles from "./Contact.module.scss"

export default function Contact() {
    return <div className={styles.container}>
        <h2 className={styles.text}>Contacto</h2>
        <a href="mailto:gdbarimboim@gmail.com" target="_blank">
            <Image src={"/envelope-plus-fill.svg"} alt="email" width={40} height={40} className={styles.icons} loading="eager" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-barimboim/" target="_blank">
            <Image src={"/linkedin.svg"} alt="linkedin" width={40} height={40} className={styles.icons} loading="eager"/>
        </a>
        <a href="https://github.com/Gbw699" target="_blank">
            <Image src={"/github.svg"} alt="github" width={40} height={40} className={styles.icons} loading="eager"/>
        </a>
    </div>
}