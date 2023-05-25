import { Gloria_Hallelujah } from 'next/font/google'
import AboutText from '@/components/aboutText/AboutText'

const gloria_hallelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function About() {
    return <div className={`${gloria_hallelujah.className}`}>
        <AboutText />
    </div>
}