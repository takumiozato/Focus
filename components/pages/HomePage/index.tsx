import Head from 'next/head'
import Header from '../../elements/Header'
import Button from '../../elements/Button'
import styles from './style.module.scss'
import useTimer, { RunState } from '../../../hooks/useTimer'
import { secondsToMinutes, minutesToSeconds } from '../../../utils/time'
import { useState } from 'react'

const Home = () => {
  const [inBreak, setInBreak] = useState(false)
  const { remainingSeconds, start, pause, reset, runState } = useTimer({
    initialSeconds: minutesToSeconds(25),
    finishFn: () => {
      setInBreak(!inBreak)
    },
  })

  // 残り時間(秒)を分に変換する
  const displayTime = secondsToMinutes(remainingSeconds)
  const displayMinutes = String(displayTime.minutes).padStart(2, '0')
  const displaySeconds = String(displayTime.sec).padStart(2, '0')

  const skip = () => {
    reset()
  }

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
          <p className={styles.timer}>{`${displayMinutes}:${displaySeconds}`}</p>
          {inBreak ? (
            <BreakModeButtons runState={runState} start={start} skip={skip} />
          ) : (
            <FocusModeButtons runState={runState} start={start} pause={pause} reset={reset} />
          )}
        </div>
      </main>
    </div>
  )
}

type BreakModeButtonsProps = {
  runState: RunState
  start: () => void
  skip: () => void
}
const BreakModeButtons: React.FC<BreakModeButtonsProps> = ({ runState, start, skip }) => {
  return (
    <>
      {runState === 'initial' && (
        <div className={styles.buttonWrapper}>
          <Button color="secondary" onClick={start}>
            休憩開始
          </Button>
        </div>
      )}
      {runState === 'running' && (
        <div className={styles.buttonWrapper}>
          <Button color="skeleton" onClick={skip}>
            スキップ
          </Button>
        </div>
      )}
    </>
  )
}

type FocusModeButtonsProps = {
  runState: RunState
  start: () => void
  pause: () => void
  reset: () => void
}
const FocusModeButtons: React.FC<FocusModeButtonsProps> = ({ runState, start, pause, reset }) => {
  return (
    <>
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
    </>
  )
}

export default Home
