"use client"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import Image from "next/image"

export default function Navbar() {
    return <div className={styles.container}>
        <Link href="/" className={`${styles.links} ${styles.big}`} ><Image src={"/house.svg"} alt="home" width={40} height={40} /></Link>
        <div className={styles.small}>
            <Link href="/about" className={styles.links}>Sobre mí</Link>
            <Link href="/projects" className={styles.links}>Proyectos</Link>
        </div>
    </div>
}