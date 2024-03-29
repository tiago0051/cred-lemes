import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FifthSection from '../components/fifth-section'
import Footer from '../components/footer'
import FourthSession from '../components/fourth-session'
import Navbar from '../components/Navbar'
import SecondSession from '../components/second-session'
import ThirdSession from '../components/third-session'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Cred Lemes</title>
        <meta name="description" content="A antecipação do saque aniversário, também conhecido como empréstimo FGTS ou empréstimo consignado com garantia do saque aniversário FGTS é um novo tipo de empréstimo para trabalhadores da rede privada (CLT) que posuem saldo no FGTS e escolheram fazer o saque aniversário." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport"></meta>
      </Head>

      <Navbar/>

      <section className={styles.sessão1}>
      <div>
          <form id="formulario" action="https://paginas.rocks/pages/index/622289" method="post" >
              <div>
                <Image src="/images/primeira-sessão/titulo-formulario.webp" alt="É a sua vez, saque aniversário FGTTS" width={541} height={314} layout="responsive"/>
              </div>

              <input id="id" name="id" type="hidden" value="622289" />
              <input id="mid" name="mid" type="hidden" value="622289" />
              <input id="pid" name="pid" type="hidden" value="20636407" />
              <input id="list_id" name="list_id" type="hidden" value="622289" />

              <input id="provider" name="provider" type="hidden" value="leadlovers" />

              <label>
                  <p>Nome e Sobrenome</p>
                  <input type="text" id="name" name="name"/>
              </label>
              
              <label>
                  <p>E-mail</p>
                  <input type="email" id="email" name="email"/>
              </label>

              <button type='submit'>Solicite aqui</button>
              <input type="hidden" id="source" name="source" value="" />
              <img src="https://llimages.com/redirect/redirect.aspx?A=V&p=20636407&m=622289" style={{display: "none"}} />
          </form>
        </div>
      </section>

      <SecondSession/>
      <ThirdSession/>
      <FourthSession/>
      <FifthSection/>
      <Footer/>
    </main>
  )
}

export default Home
