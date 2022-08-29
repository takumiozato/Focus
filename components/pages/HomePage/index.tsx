import Head from 'next/head'
import Button from '../../ui/ButtonComponent'
import styles from './style.module.scss'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Focus</title>
        <meta name="description" content="It's Pomodoro Timer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
