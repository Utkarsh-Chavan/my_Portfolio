import { useEffect, useRef } from 'react'
import HeroScene from '../scenes/HeroScene'
import { animateHeroEntrance } from '../animations/heroEntrance'

function Hero({ isLoading }) {
  const heroRef = useRef()
  const eyebrowRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const buttonRef = useRef()
  const metaRef = useRef()
  const coreLabelRef = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    if (isLoading) return

    const elements = {
      eyebrow: eyebrowRef.current,
      title: titleRef.current,
      description: descriptionRef.current,
      button: buttonRef.current,
      meta: metaRef.current,
      coreLabel: coreLabelRef.current,
      scroll: scrollRef.current,
    }

    const animation = animateHeroEntrance(elements)

    return () => {
      animation.kill()
    }
  }, [isLoading])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero"
    >
      <div className="hero-scene">
        <HeroScene />
      </div>

      <div className="hero-content">
        <div className="hero-intro">
          <p
            ref={eyebrowRef}
            className="eyebrow"
          >
            FULL-STACK DEVELOPER
          </p>

          <h1 ref={titleRef}>
            Building
            <br />
            intelligent
            <br />
            experiences.
          </h1>

          <p
            ref={descriptionRef}
            className="hero-description"
          >
            Full-stack systems, intelligent applications,
            and interactive digital experiences.
          </p>

          <a
            ref={buttonRef}
            href="#projects"
            className="explore-button"
          >
            Explore my work
            <span>↗</span>
          </a>
        </div>

        <div
          ref={metaRef}
          className="hero-meta"
        >
          <span>AI / INTELLIGENT SYSTEMS</span>
          <span>INTERACTIVE TECHNOLOGY</span>
        </div>
      </div>

      <div
        ref={coreLabelRef}
        className="hero-core-label"
      >
        <span className="status-dot"></span>
        DIGITAL CORE / ONLINE
      </div>

      <a
        ref={scrollRef}
        href="#about"
        className="hero-scroll"
      >
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  )
}

export default Hero