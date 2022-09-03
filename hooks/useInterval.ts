import { useRef, useEffect } from 'react'

type Params = {
  onUpdate: () => void
}
const useInterval = ({ onUpdate }: Params) => {
  const onUpdateRef = useRef(() => {})
  useEffect(() => {
    onUpdateRef.current = onUpdate
  })
  useEffect(() => {
    const timerId = setInterval(() => onUpdateRef.current(), 1000)
    return () => clearInterval(timerId)
  }, [])
}

export default useInterval
