import Head from 'next/head'
import Header from '../../elements/Header'
import Button from '../../elements/Button'
import styles from './style.module.scss'

const Home = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Focus</title>
        <meta name="description" content="It's Pomodoro Timer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <p>Focus</p>
        <div className={styles.buttonWrapper}>
          <Button color="primary" onClick={() => {}}>
            集中開始
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
