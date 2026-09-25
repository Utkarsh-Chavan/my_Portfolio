import { useEffect, useState } from 'react'
import { useScene } from '../scenes/SceneController'

function LoadingScreen({ onComplete }) {
  const { setSceneState } = useScene()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + increment, 100)

        if (next === 100) {
          clearInterval(timer)

          setTimeout(() => {
            setSceneState('hero')
            onComplete()
          }, 500)
        }

        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-header">
        <span>NIL / SYSTEM</span>
        <span>2026</span>
      </div>

      <div className="loading-center">
        <p className="loading-label">INITIALIZING EXPERIENCE</p>

        <div className="loading-title">
          NIL
        </div>

        <div className="loading-progress">
          <div
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loading-info">
          <span>SYSTEM STATUS</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="loading-footer">
  <div className="loading-modules">
    <span>01&nbsp;&nbsp; FULL-STACK SYSTEMS</span>
    <span>02&nbsp;&nbsp; INTELLIGENT SYSTEMS</span>
    <span>03&nbsp;&nbsp; INTERACTIVE SYSTEMS</span>
  </div>

  <span>PORTFOLIO ENVIRONMENT</span>
</div>
</div>
  )
}

export default LoadingScreen