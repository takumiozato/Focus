import { useState } from 'react'
import useInterval from './useInterval'

export type RunState = 'initial' | 'running' | 'pause'

type Props = {
  initialTime: number
}
const useTimer = (props: Props) => {
  const [remainingTime, setRemainingTime] = useState(props.initialTime)
  const [runState, setRunState] = useState<RunState>('initial')

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
    setRunState('initial')
  }

  // 指定した関数を、指定した間隔で実行する
  useInterval({
    onUpdate: () => setRemainingTime(remainingTime - 1),
    msDelay: 1000,
    isPause: runState === 'pause',
  })

  return { start, pause, reset, remainingTime, runState }
}

export default useTimer
