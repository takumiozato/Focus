import { useState } from 'react'
import useInterval from './useInterval'

export type RunState = 'initial' | 'running' | 'pause'

type Props = {
  time: number
}
const useTimer = (props: Props) => {
  const [time, setTime] = useState(props.time)
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
  useInterval({ onUpdate: () => setTime(time - 1), msDelay: 1000 })

  return { start, pause, reset, time, runState }
}

export default useTimer
