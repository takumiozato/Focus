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
      <main className={styles.main}>
        <div className={styles.timer_area}>
          <p className={styles.timer}>25:00</p>
          <div className={styles.buttonWrapper}>
            <Button color="primary" onClick={() => {}}>
              集中開始
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
