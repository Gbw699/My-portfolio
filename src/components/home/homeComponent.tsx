import Image from 'next/image'
import styles from "./homeComponent.module.scss"

export default function HomeComponent() {
    return <div className={styles.grid}>
        <div className={styles.element1}>
            <Image className={styles.arrow} src={"/Arrow.png"} alt='arrow' width={150} height={170} />
        </div>
        <div className={styles.element2}>
            <Image src={"/imageForHome.svg"} alt='imgHome' width={350} height={350} />
        </div>
        <div className={styles.element3}>
            <p>Hola! Soy <span className={styles.name}>Gabriel Barimboim</span></p>
        </div>
        <div className={styles.element4}>
            <p className={styles.nestedElement1}>Un Desarrollador Web</p>
            <h2 className={styles.nestedElement2}>Que convierte café en código</h2>
            <p className={styles.nestedElement3}>Lorem, ipsum dolor </p>
        </div>
    </div>
}