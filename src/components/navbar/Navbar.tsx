"use client"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"]

})

export default function Navbar() {
    return <div className={`${styles.container} ${plus_jakarta_sans.className}`}>
        <Link href="/" className={`${styles.links} ${styles.big}`} >
            <Image src={"/house.svg"} alt="home" width={40} height={40} loading="eager" />
        </Link>
        <div className={styles.small}>
            <Link href="/about" className={styles.links}>Sobre mí</Link>
            <Link href="/projects" className={styles.links}>Proyectos</Link>
        </div>
    </div>
}