import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const projects = [
  {
    number: '01',
    title: 'Zero UI',
    subtitle: 'Emergency assistance through contextual interaction.',
    description:
      'A zero-UI emergency assistance system designed around contextual phone interactions, allowing emergency actions to be triggered without relying on a traditional interface.',
    tags: ['SYSTEM DESIGN', 'FASTAPI', 'SQLITE', 'MOBILE'],
    visual: 'zero-ui',

    liveUrl: '',
    githubUrl: '',
  },

  {
    number: '02',
    title: 'ExoSage',
    subtitle: 'Physics-guided AI for exoplanet detection.',
    description:
      'A research-oriented system for identifying possible exoplanet transit signals from noisy astronomical light curves using machine learning and physics-guided analysis.',
    tags: ['AI / ML', 'PYTHON', 'ASTRONOMY', 'DATA'],
    visual: 'exosage',

    liveUrl: '',
    githubUrl: '',
  },

  {
    number: '03',
    title: 'Smart City',
    subtitle: 'Computer vision for urban road hazards.',
    description:
      'A computer vision platform designed to identify road hazards and provide an intelligent monitoring workflow for urban infrastructure.',
    tags: ['COMPUTER VISION', 'YOLO', 'PYTHON', 'VISION'],
    visual: 'smart-city',

    liveUrl: '',
    githubUrl: '',
  },

  {
    number: '04',
    title: 'Expense Tracker',
    subtitle: 'A full-stack financial management platform.',
    description:
      'A full-stack application for recording expenses, organizing financial data and presenting spending patterns through interactive visualizations.',
    tags: ['FULL-STACK', 'FLASK', 'MYSQL', 'CHARTS'],
    visual: 'expense',

    liveUrl: '',
    githubUrl: '',
  },
]


function ProjectVisual({ type }) {
  if (type === 'zero-ui') {
    return (
      <div className="project-visual zero-ui-visual">

        <div className="visual-phone">
          <div className="phone-camera"></div>

          <div className="phone-screen">
            <span>ZERO UI</span>

            <strong>READY</strong>

            <div className="phone-signal"></div>
          </div>
        </div>

        <div className="visual-signal signal-one">
          SENSOR
        </div>

        <div className="visual-signal signal-two">
          DETECTION
        </div>

        <div className="visual-signal signal-three">
          ALERT
        </div>

      </div>
    )
  }


  if (type === 'exosage') {
    return (
      <div className="project-visual exosage-visual">

        <div className="exo-orbit exo-orbit-one"></div>

        <div className="exo-orbit exo-orbit-two"></div>

        <div className="exo-star"></div>

        <div className="exo-planet"></div>

        <div className="exo-wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="exo-label">
          TRANSIT SIGNAL / DETECTED
        </div>

      </div>
    )
  }


  if (type === 'smart-city') {
    return (
      <div className="project-visual city-visual">

        <div className="city-road">
          <div className="road-line road-line-one"></div>
          <div className="road-line road-line-two"></div>
        </div>

        <div className="detection-box">
          <span>ROAD HAZARD</span>

          <strong>92%</strong>
        </div>

        <div className="city-data">
          <span>VISION SYSTEM</span>
          <span>OBJECT DETECTED</span>
        </div>

      </div>
    )
  }


  return (
    <div className="project-visual expense-visual">

      <div className="expense-chart">
        <span style={{ height: '35%' }}></span>
        <span style={{ height: '62%' }}></span>
        <span style={{ height: '45%' }}></span>
        <span style={{ height: '80%' }}></span>
        <span style={{ height: '58%' }}></span>
        <span style={{ height: '92%' }}></span>
      </div>

      <div className="expense-total">
        <small>MONTHLY FLOW</small>

        <strong>₹ 42,680</strong>
      </div>

    </div>
  )
}


function Projects() {

  const [activeIndex, setActiveIndex] = useState(0)

  const [selectedProject, setSelectedProject] =
    useState(null)


  const deckRef = useRef(null)

  const cardRefs = useRef([])


  const activeProject = projects[activeIndex]


  const selectedProjectData =
    selectedProject !== null
      ? projects[selectedProject]
      : null


  const goToProject = (index) => {
    const nextIndex =
      (index + projects.length) % projects.length

    setActiveIndex(nextIndex)
  }


  const nextProject = () => {
    goToProject(activeIndex + 1)
  }


  const previousProject = () => {
    goToProject(activeIndex - 1)
  }


  /* ----------------------------------------
     PROJECT CARD ANIMATION
     ---------------------------------------- */

  useEffect(() => {

    const cards = cardRefs.current

    cards.forEach((card, index) => {

      if (!card) return


      let offset =
        (index - activeIndex + projects.length) %
        projects.length


      if (offset > projects.length / 2) {
        offset -= projects.length
      }


      let x = 0

      let scale = 0.6

      let opacity = 0

      let rotateY = 0

      let zIndex = 1


      if (offset === 0) {

        // CENTER

        x = 0

        scale = 1

        opacity = 1

        rotateY = 0

        zIndex = 5

      } else if (offset === -1) {

        // LEFT

        x = -440

        scale = 0.68

        opacity = 0.32

        rotateY = 10

        zIndex = 3

      } else if (offset === 1) {

        // RIGHT

        x = 440

        scale = 0.68

        opacity = 0.32

        rotateY = -10

        zIndex = 3

      } else {

        // FAR CARDS

        x = offset < 0 ? -720 : 720

        scale = 0.55

        opacity = 0

        rotateY =
          offset < 0
            ? 18
            : -18

        zIndex = 1
      }


      gsap.to(card, {
        x,
        scale,
        opacity,
        rotateY,

        duration: 0.75,

        ease: 'power3.out',

        zIndex,
      })

    })

  }, [activeIndex])


  /* ----------------------------------------
     KEYBOARD NAVIGATION
     ---------------------------------------- */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (selectedProject !== null) return


      if (event.key === 'ArrowRight') {
        nextProject()
      }


      if (event.key === 'ArrowLeft') {
        previousProject()
      }


      if (event.key === 'Enter') {
        setSelectedProject(activeIndex)
      }

    }


    window.addEventListener(
      'keydown',
      handleKeyDown
    )


    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }

  }, [activeIndex, selectedProject])


  /* ----------------------------------------
     MOUSE TILT
     ---------------------------------------- */

  const handlePointerMove = (event) => {

    if (
      !deckRef.current ||
      selectedProject !== null
    ) {
      return
    }


    const rect =
      deckRef.current.getBoundingClientRect()


    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5


    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5


    gsap.to(deckRef.current, {

      rotateX: -y * 6,

      rotateY: x * 8,

      duration: 0.35,

      ease: 'power2.out',

    })

  }


  const handlePointerLeave = () => {

    if (!deckRef.current) return


    gsap.to(deckRef.current, {

      rotateX: 0,

      rotateY: 0,

      duration: 0.5,

      ease: 'power3.out',

    })

  }


  /* ----------------------------------------
     OPEN PROJECT
     ---------------------------------------- */

  const openProject = (index) => {

    setActiveIndex(index)

    setSelectedProject(index)

  }


  /* ----------------------------------------
     CLOSE PROJECT
     ---------------------------------------- */

  const closeProject = () => {

    setSelectedProject(null)

  }


  return (

    <section
      id="projects"
      className="projects"
    >

      {/* ------------------------------------
          PROJECTS HEADING
          ------------------------------------ */}

      <div className="projects-heading">

        <span>
          03 / PROJECTS
        </span>


        <h2>
          Selected work.
        </h2>


        <p>
          Systems, experiments and products built
          across software, intelligent systems and
          interactive technology.
        </p>

      </div>


      {/* ------------------------------------
          PROJECT DECK
          ------------------------------------ */}

      <div className="project-deck-wrapper">

        <div
          ref={deckRef}
          className="project-deck"

          onPointerMove={
            handlePointerMove
          }

          onPointerLeave={
            handlePointerLeave
          }
        >

          {projects.map(
            (project, index) => {

              const isActive =
                index === activeIndex


              return (

                <button
                  key={project.number}

                  ref={(element) => {
                    cardRefs.current[index] =
                      element
                  }}

                  className={`project-card ${
                    isActive
                      ? 'is-active'
                      : ''
                  }`}

                  onClick={() => {

                    if (isActive) {

                      openProject(index)

                    } else {

                      goToProject(index)

                    }

                  }}
                >

                  <div className="project-card-top">

                    <span>
                      {project.number}
                    </span>

                    <span>
                      {isActive
                        ? 'SELECTED'
                        : 'VIEW'}
                    </span>

                  </div>


                  <ProjectVisual
                    type={project.visual}
                  />


                  <div className="project-card-bottom">

                    <div>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.subtitle}
                      </p>

                    </div>


                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </button>

              )

            }
          )}

        </div>


        {/* ----------------------------------
            PROJECT NAVIGATION
            ---------------------------------- */}

        <div className="project-navigation">

          <button
            onClick={previousProject}
            aria-label="Previous project"
          >
            ←
          </button>


          <div className="project-counter">

            <strong>
              {String(
                activeIndex + 1
              ).padStart(2, '0')}
            </strong>

            <span>/</span>

            <span>
              {String(
                projects.length
              ).padStart(2, '0')}
            </span>

          </div>


          <button
            onClick={nextProject}
            aria-label="Next project"
          >
            →
          </button>

        </div>


        <p className="project-hint">
          MOVE TO EXPLORE · CLICK TO OPEN
        </p>

      </div>


      {/* ====================================
          PROJECT DETAIL
          ==================================== */}

      {selectedProjectData && (

        <div className="project-detail">

          {/* --------------------------------
              CLOSE
              -------------------------------- */}

          <button
            className="project-detail-close"

            onClick={closeProject}
          >
            ← BACK TO PROJECTS
          </button>


          {/* --------------------------------
              DETAIL HEADER
              -------------------------------- */}

          <div className="project-detail-header">

            <span>
              {selectedProjectData.number}
              {' / '}
              {projects.length}
            </span>


            <span>
              PROJECT DETAIL
            </span>

          </div>


          {/* --------------------------------
              DETAIL CONTENT
              -------------------------------- */}

          <div className="project-detail-content">

            {/* PROJECT VISUAL */}

            <div className="project-detail-visual">

              <ProjectVisual
                type={
                  selectedProjectData.visual
                }
              />

            </div>


            {/* PROJECT INFORMATION */}

            <div className="project-detail-copy">

              <p className="project-detail-label">

                {selectedProjectData.number}
                {' / '}
                SELECTED WORK

              </p>


              <h3>
                {selectedProjectData.title}
              </h3>


              <h4>
                {selectedProjectData.subtitle}
              </h4>


              <p className="project-detail-description">

                {selectedProjectData.description}

              </p>


              {/* TECHNOLOGIES */}

              <div className="project-detail-tags">

                {selectedProjectData.tags.map(
                  (tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  )
                )}

              </div>


              {/* --------------------------------
                  PROJECT LINKS
                  -------------------------------- */}

              <div className="project-detail-actions">

                {selectedProjectData.liveUrl && (

                  <a
                    href={
                      selectedProjectData.liveUrl
                    }

                    target="_blank"

                    rel="noopener noreferrer"
                  >
                    VIEW PROJECT ↗
                  </a>

                )}


                {selectedProjectData.githubUrl && (

                  <a
                    href={
                      selectedProjectData.githubUrl
                    }

                    target="_blank"

                    rel="noopener noreferrer"
                  >
                    GITHUB ↗
                  </a>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>

  )
}


export default Projects