import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Sou formado em Sistemas de informação pela Unigranrio, atualmente estou fazendo uma pós-graduação em desenvolvimento full stack, e estou a procura de uma oportunidade para um estagio ou
                vaga de desenvolvedor Jr front end.

                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                />

            </div>

        </div>
    )
}