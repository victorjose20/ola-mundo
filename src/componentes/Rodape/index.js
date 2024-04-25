import styles from './Rodape.module.css'
import { ReactComponent as MarcaRagistrada } from 'assets/marca_registrada.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <MarcaRagistrada />
            Desenvolvido por Alura
        </footer>
    )
}
    
       