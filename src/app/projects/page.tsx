import { Poppins } from "next/font/google"
import Projects from "@/components/projects/projects"

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function ProjectsPage() {
    return <div className={`${poppins.className}`}>
        <Projects />
    </div>
}