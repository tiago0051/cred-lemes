import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/router'
import styles from '../styles/confirma_cadastro.module.scss'

export default function Confirma_Cadastro(){
    const router = useRouter()
    return(
        <main className={styles.main}>
            <div>
                <div><Image src="/images/confirma_cadastro/agradecimento.png" alt='Orbigado' width={713} height={283}/></div>
                <h2>Você está quase lá...</h2>

                <p>Em breve uma de nossos consultores ajudará você a solicitar seu Saque do FGTS. Se preferir pode falar mais rápido, basta APERTAR o botão abaixo.</p>

                <button onClick={() => router.push("https://api.whatsapp.com/send/?phone=5521990045906&text&app_absent=0")}>CONTATO <FaWhatsapp/></button>
            </div>
        </main>
    )
}