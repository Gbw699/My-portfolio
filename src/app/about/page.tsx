import { Gloria_Hallelujah } from 'next/font/google'

const gloria_hallelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function About() {
    return <div className={`${gloria_hallelujah.className}`}>
        <h1>Sobre mi</h1>
    </div>
}