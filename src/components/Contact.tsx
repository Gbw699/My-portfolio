import Image from "next/image"
import styles from "./Contact.module.scss"

export default function Contact() {
    return <div className={styles.container}>
        <a href="mailto:gdbarimboim@gmail.com">
            <Image src={"/envelope-plus-fill.svg"} alt="email" width={40} height={40} className={styles.icons} />
        </a>
        <a href="linkedin">
            <Image src={"/linkedin.svg"} alt="linkedin" width={40} height={40} className={styles.icons}/>
        </a>
        <a href="github">
            <Image src={"/github.svg"} alt="github" width={40} height={40} className={styles.icons}/>
        </a>
    </div>
}