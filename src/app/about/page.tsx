import { Gloria_Hallelujah } from 'next/font/google'
import AboutText from '@/components/aboutText/AboutText'
import CvButtons from '@/components/cvButtons/CvButtons'
import styles from "./page.module.scss"

const gloria_hallelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function About() {
    return <div className={`${styles.container} ${gloria_hallelujah.className}`}>
        <AboutText />
        <CvButtons />
    </div>
}