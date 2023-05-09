"use-client"

import Link from "next/link"

export default function Navbar() {
    return <>
        <h4><Link href="/">Ícono home</Link></h4>
        <h4><Link href="/about">Sobre mi</Link></h4>
        <h4><Link href="/projects">Proyectos</Link></h4>
        <h4><Link href="/contact">Contacto</Link></h4>
    </>
}