import Image from "next/image"
import styles from "./ProjectCard.module.scss"

interface IProps {
    projectInfo: TProjectInfo
}
type TProjectInfo = {
    id: number
    position: string,
    name: string,
    text: string
    img: string
}

export default function ProjectCard({ projectInfo }: IProps) {
    return <section className={styles.container}>
        <div className={styles.textContainer}>
            <h5>{projectInfo.position}</h5>
            <h2>{projectInfo.name}</h2>
            <p>{projectInfo.text}</p>
            <a href="https://pf-voy-henry.vercel.app/" target="_blank">
                <Image src={"/external-link.png"} alt="external-link" width={20} height={20} className={styles.icons} loading="eager" />
            </a>
        </div>
        <div className={styles.imgContainer}>
            <Image src={projectInfo.img} alt="project-img" width={100}
                height={100} loading="eager" />
        </div>
    </section>
}