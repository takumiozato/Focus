import React, { useState } from 'react'

export type RunState = 'initial' | 'running' | 'pause'

type Props = {
  time: string
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

  return { start, pause, reset, time, runState }
}

export default useTimer
