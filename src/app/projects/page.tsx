import { Poppins } from "next/font/google"
import ProjectCard from "@/components/projects/ProjectCard"

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

//mandar por props los un objeto con el dato del projecto

export default function ProjectsPage() {
    const projectInfo = {
        id: 0,
        position: "Front End Developer",
        name: "Voy Henry",
        text: "asdfasfasfasf",
        img: "github.svg"
    }

    return <div className={`${poppins.className}`}>
        <ProjectCard projectInfo={projectInfo} />
    </div>
}