import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const domains = [
  {
    number: '01',
    title: 'Software Systems',
    description:
      'Building complete applications across the frontend, backend and database layers.',
    technologies:
      'React · JavaScript · Python · Flask · SQL · Git',
  },
  {
    number: '02',
    title: 'Intelligent Systems',
    description:
      'Exploring AI, machine learning and computer vision to build systems that can understand and respond.',
    technologies:
      'Python · Machine Learning · Computer Vision · Data',
  },
  {
    number: '03',
    title: 'Interactive Technology',
    description:
      'Creating interfaces and digital experiences where design, motion and technology come together.',
    technologies:
      'Three.js · UI/UX · Motion · 3D · Creative Technology',
  },
]

function Skills() {
  const sectionRef = useRef(null)
  const domainRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        domainRefs.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
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
      id="skills"
      className="skills"
    >
      <div className="skills-header">
        <p>02 / SKILLS</p>

        <h2>
          How I {' '}
          <br />
          build.
        </h2>

        <p className="skills-intro">
          Full-stack development is my foundation.
          From there, I explore intelligent systems
          and interactive technology.
        </p>
      </div>

      <div className="skills-core">
  <div className="skills-orbit skills-orbit-outer"></div>
  <div className="skills-orbit skills-orbit-inner"></div>

  <div className="skills-marker skills-marker-top">
    001
  </div>

  <div className="skills-marker skills-marker-right">
    SYSTEM
  </div>

  <div className="skills-marker skills-marker-bottom">
    ACTIVE
  </div>

  <div className="skills-particle skills-particle-one"></div>
  <div className="skills-particle skills-particle-two"></div>
  <div className="skills-particle skills-particle-three"></div>

  <div className="skills-core-text">
    <span>PRIMARY</span>
    FULL-STACK
    <strong>DEVELOPER</strong>
  </div>
</div>

      <div className="skills-domains">
        {domains.map((domain, index) => (
          <article
            key={domain.number}
            ref={(element) => {
              domainRefs.current[index] = element
            }}
            className="skill-domain"
          >
            <span className="skill-domain-number">
              {domain.number}
            </span>

            <h3>{domain.title}</h3>

            <p>{domain.description}</p>

            <div className="skill-technologies">
              {domain.technologies}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills