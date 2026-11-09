import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 60, startDelay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const startTimer = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setDone(true)
          clearInterval(timer)
        }
      }, speed)
      return () => clearInterval(timer)
    }, startDelay)
    return () => clearTimeout(startTimer)
  }, [text, speed, startDelay])

  return { displayed, done }
}

