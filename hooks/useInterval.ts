import { useRef, useEffect } from 'react'

type Params = {
  onUpdate: () => void
  msDelay: number
}
const useInterval = ({ onUpdate, msDelay }: Params) => {
  const onUpdateRef = useRef(() => {})
  useEffect(() => {
    onUpdateRef.current = onUpdate
  })
  useEffect(() => {
    const timerId = setInterval(() => onUpdateRef.current(), msDelay)
    return () => clearInterval(timerId)
  }, [])
}

export default useInterval
