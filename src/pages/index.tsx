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
        <title>Cred Lemos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Navbar/>

      <section className={styles.sessão1}>
      <div>
          <form>
              <div>
                <Image src="/images/primeira-sessão/titulo-formulario.webp" alt="É a sua vez, saque aniversário FGTTS" width={541} height={314} layout="responsive"/>
              </div>

              <label>
                  <p>Nome e Sobrenome</p>
                  <input type="text"/>
              </label>
              
              <label>
                  <p>CPF</p>
                  <input type="text"/>
              </label>

              <label>
                  <p>Celular</p>
                  <input type="text"/>
              </label>

              <label>
                  <p>CEP</p>
                  <input type="text"/>
              </label>
              
              <label>
                  <p>E-mail</p>
                  <input type="email"/>
              </label>

              <button>Solicite aqui</button>
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