import Image from "next/image"
import styles from "./Footer.module.scss"
import { Plus_Jakarta_Sans } from "next/font/google"

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"]

})

export default function Contact() {
    return <footer className={`${styles.container} ${plus_jakarta_sans.className}`}>
        <a href="mailto:gdbarimboim@gmail.com" target="_blank">
            <Image src={"/envelope-plus-fill.svg"} alt="email" width={35} height={35} className={styles.icons} loading="eager" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-barimboim/" target="_blank">
            <Image src={"/linkedin.svg"} alt="linkedin" width={30} height={30} className={styles.icons} loading="eager" />
        </a>
        <a href="https://github.com/Gbw699" target="_blank">
            <Image src={"/github.svg"} alt="github" width={35} height={33} className={styles.icons} loading="eager" />
        </a>
    </footer>
}