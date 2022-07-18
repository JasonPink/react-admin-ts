import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
    console.log(111)
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    console.log(222)
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
