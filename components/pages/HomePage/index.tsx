import { useState } from 'react'
import Head from 'next/head'
import Header from '../../elements/Header'
import Button from '../../elements/Button'
import styles from './style.module.scss'
import useTimer from '../../../hooks/useTimer'
import useInterval from '../../../hooks/useInterval'

const Home = () => {
  const { start, pause, reset, runState } = useTimer({ time: 25 })
  const [time, setTime] = useState(180)
  useInterval({ onUpdate: () => setTime(time - 1) })
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
          <p className={styles.timer}>{time}</p>
          {runState === 'initial' && (
            <div className={styles.buttonWrapper}>
              <Button color="primary" onClick={start}>
                集中開始
              </Button>
            </div>
          )}
          {runState === 'running' && (
            <div className={styles.buttonWrapper}>
              <Button color="skeleton" onClick={pause}>
                一時停止
              </Button>
            </div>
          )}
          {runState === 'pause' && (
            <>
              <div className={styles.buttonWrapper}>
                <Button color="primary" onClick={start}>
                  再開
                </Button>
              </div>
              <div className={styles.buttonWrapper}>
                <Button color="skeleton" onClick={reset}>
                  リセット
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
