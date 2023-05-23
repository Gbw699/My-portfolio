import Image from 'next/image'
import styles from "./homeComponent.module.scss"

export default function HomeComponent() {
    return <div>
        <div>
            <Image src={"/imageForHome.svg"} alt='imgHome' width={500} height={500} />
        </div>
        <div>
            <p>Hola! Soy Gabriel Barimboim</p>
        </div>
        <div>
            <p>Un Desarrollador Web</p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta, officia adipisci quisquam iure soluta dolor pariatur hic placeat. Excepturi vitae tempore nihil quisquam architecto odit magnam repellendus dolore ullam!</h2>
            <p>Lorem, ipsum dolor </p>
        </div>
    </div>
}