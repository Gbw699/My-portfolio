import styles from "./AboutText.module.scss"

export default function AboutText() {
    return <div>
        <h1 className={styles.title}>
            Soy desarrollador Full Stack...
        </h1>
        <p className={styles.text}>
            (breve introducción sobre gusto de la programación)
            <br />
            <br />
            Todo empezó el día que decidí dejar de estudiar producción audiovisual. La pregunta clave en ese momento fue <strong className={styles.strongText}>¿Me veo viviendo del cine en un futuro?</strong>. Podría decir que la respuesta corta fue un {'"NO"'}, pero la realidad siempre es un poco más compleja. La respuesta larga fue si quiero seguir viviendo el cine, pero no me veo viviendo del cine.
            <br />
            <br />
            En medio de semejante contradicción (que incluso suena incoherente) fue que <strong className={styles.strongText}>decidí probar con la programación</strong>, aunque no fue una decisión enteramente propia. La verdad es que en un principio yo fuí el típico caso de {'"me anotó un amigo"'} (en mi caso 3) que me insistieron para que le diera una oportunidad. Ya ha pasado 1 año desde ese momento y puedo decir que mis amigos no estaban equivocados.
            <br />
            <br />
            <strong className={styles.strongText}>La programación ha sido la pieza clave del rompecabezas</strong>. Descubrí que el camino de la programación es algo que me encanta y quiero seguir transitándolo, abriendo un gran abanico de posibilidades para disfrutar mi vida y conectarme con el cine desde un ángulo distinto.
        </p>
    </div>
}