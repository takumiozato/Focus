import { useState } from 'react'
import useInterval from './useInterval'

export type RunState = 'initial' | 'running' | 'pause'

type Props = {
  initialSeconds: number
  finishFn?: () => void
}
const useTimer = (props: Props) => {
  const [remainingSeconds, setRemainingSeconds] = useState(props.initialSeconds)
  const [runState, setRunState] = useState<RunState>('initial')

  function handleSetRemainingSeconds(time: number) {
    setRemainingSeconds(time)
  }

  function start() {
    console.log('start!')
    setRunState('running')
  }

  function pause() {
    console.log('pause!')
    setRunState('pause')
  }

  function reset() {
    console.log('reset!')
    setRemainingSeconds(props.initialSeconds)
    setRunState('initial')
  }

  // 指定した関数を、指定した間隔で実行する
  useInterval({
    onUpdate: () => {
      if (remainingSeconds < 1) {
        props.finishFn?.()
        setRunState('initial')
        return
      }
      setRemainingSeconds(remainingSeconds - 1)
    },
    msDelay: 1000,
    isPause: runState !== 'running',
  })

  return { handleSetRemainingSeconds, start, pause, reset, remainingSeconds, runState }
}

export default useTimer
