import { useEffect } from 'react'
import { useScene } from '../scenes/SceneController'

function ScrollManager() {
  const { setSceneState } = useScene()

  useEffect(() => {
    const sections = [
      { id: 'hero', state: 'hero' },
      { id: 'about', state: 'about' },
      { id: 'skills', state: 'skills' },
      { id: 'projects', state: 'projects' },
      { id: 'experience', state: 'experience' },
      { id: 'contact', state: 'contact' },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0]

        if (visibleSection) {
          const section = sections.find(
            (item) => item.id === visibleSection.target.id
          )

          if (section) {
            setSceneState(section.state)
          }
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [setSceneState])

  return null
}

export default ScrollManager