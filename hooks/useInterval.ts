import { useRef, useEffect } from 'react'

type Params = {
  onUpdate: () => void
  msDelay: number
  isPause: boolean
}
const useInterval = ({ onUpdate, msDelay, isPause }: Params) => {
  const onUpdateRef = useRef(() => {})
  useEffect(() => {
    onUpdateRef.current = onUpdate
  })
  useEffect(() => {
    if (isPause) {
      return () => {}
    }

    const timerId = setInterval(() => onUpdateRef.current(), msDelay)
    return () => clearInterval(timerId)
  }, [msDelay, isPause])
}

export default useInterval
