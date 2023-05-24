import Image from 'next/image'
import styles from "./homeComponent.module.scss"
import { Gloria_Hallelujah } from 'next/font/google'

const gloria_hallelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function HomeComponent() {
    return <div className={`${styles.grid} ${gloria_hallelujah.className}`}>
        <div className={styles.element1}>
            <Image className={styles.arrow} src={"/Arrow.png"} alt='arrow' width={122} height={118} />
        </div>
        <div className={styles.element2}>
            <Image src={"/imageForHome.svg"} alt='imgHome' width={350} height={350} />
        </div>
        <div className={styles.element3}>
            <p>Hola! Soy <a href='https://linktr.ee/gbw699' target='_blank' className={styles.name}>Gabriel Barimboim</a></p>
        </div>
        <div className={styles.element4}>
            <p className={styles.nestedElement1}>Un Desarrollador Web</p>
            <h2 className={styles.nestedElement2}>Que convierte mate en <a href='https://github.com/Gbw699/My-portfolio' target='_blank' className={styles.text}>código</a>...</h2>
            <p className={styles.nestedElement3}>Y en buenos momentos :) </p>
        </div>
    </div>
}