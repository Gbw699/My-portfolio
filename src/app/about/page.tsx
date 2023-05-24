import { Gloria_Hallelujah } from 'next/font/google'

const gloria_hallelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function About() {
    return <div className={`${gloria_hallelujah.className}`}>
        <h1>Soy desarrollador Full Stack...</h1>
        <p>Todo empezó el día que decidí dejar de estudiar producción audiovisual. La pregunta clave en ese momento fue ¿Me veo viviendo del cine en un futuro?. Podría decir que la respuesta corta fue un {'"NO"'}, pero la realidad siempre es un poco más compleja. La respuesta larga fue {'"SÍ"'} quiero seguir viviendo del cine, pero {'"NO"'} me veo viviendo del cine.</p>
        <p>En medio de semejante contradicción (que incluso suena incoherente) fue que decidí probar con la programación, aunque no fue una decisión enteramente propia. La verdad es que en un principio yo fuí el típico caso de {'"me anotó un amigo"'} (en mi caso 3) que me insistieron para que le diera una oportunidad. Ya ha pasado 1 año desde ese momento y puedo decir que mis amigos no estaban equivocados al insistirme.</p>
        <p>La programación ha sido la pieza clave del rompecabezas. Descubrí que la programación es algo que me encanta (principalmente el front) y que me va a dar la posibilidad de vivir el cine como hobby, sin tener que vivir del cine laboralmente.   </p>
    </div>
}