import Link from "next/link"
//import style from "./Navbar.module.scss"

export default function Navbar() {
    return <>
        <Link href="/">Ícono home</Link>
        <Link href="/about">Sobre mi</Link>
        <Link href="/projects">Proyectos</Link>
    </>
}