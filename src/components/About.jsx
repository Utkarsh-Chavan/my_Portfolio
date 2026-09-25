import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about"
    >
      <div className="about-number">
        01 / ABOUT
      </div>

      <div className="about-layout">

        <div
          ref={imageRef}
          className="about-image-wrapper"
        >
          <img
            src="/images/profile.png"
            alt="Portrait"
            className="about-image"
          />

          <div className="about-image-label">
            NIL / 2026
          </div>
        </div>

        <div
          ref={contentRef}
          className="about-content"
        >
          <p className="about-eyebrow">
            BUILDING WITH CURIOSITY.
          </p>

          <h2>
            I like turning
            <br />
            ideas into
            <br />
            <span>working systems.</span>
          </h2>

          <p className="about-description">
            I'm a B.Tech IT student and Full-Stack Developer
            interested in building useful software, intelligent
            systems and interactive digital experiences.
          </p>

          <p className="about-description">
            I enjoy working across the stack — from designing
            interfaces and building web applications to
            experimenting with AI, computer vision and
            emerging technologies.
          </p>

          <div className="about-focus">
            <div>
              <span>01</span>
              FULL-STACK
            </div>

            <div>
              <span>02</span>
              INTELLIGENT SYSTEMS
            </div>

            <div>
              <span>03</span>
              INTERACTIVE TECHNOLOGY
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About