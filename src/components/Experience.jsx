function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="section-label">
        04 / JOURNEY
      </div>

      <div className="section-content">

        <div className="-heading">
          <h2>
            Learning by building.
          </h2>

          <p>
            A journey shaped by education,
            hands-on projects and continuous
            exploration.
          </p>
        </div>


        <div className="journey-list">

          {/* CURRENTLY */}

          <div className="journey-item">

            <div className="journey-meta">
              <span>01</span>
              <span>CURRENTLY</span>
            </div>

            <div className="journey-main">

              <h3>
                Full-Stack Development
              </h3>

              <p>
                Developing my skills through
                hands-on projects and an ongoing
                full-stack development internship.
              </p>

              <div className="journey-tags">
                <span>REACT</span>
                <span>JAVASCRIPT</span>
                <span>TAILWIND</span>
                <span>NODE.JS</span>
              </div>

            </div>

          </div>


          {/* EDUCATION */}

          <div className="journey-item">

            <div className="journey-meta">
              <span>02</span>
              <span>EDUCATION</span>
            </div>

            <div className="journey-main">

              <h3>
                B.Tech in Information Technology
              </h3>

              <p>
                Building a foundation in software
                systems, computing and emerging
                technologies.
              </p>

            </div>

          </div>


          {/* VIRTUAL EXPERIENCE */}

          <div className="journey-item">

            <div className="journey-meta">
              <span>03</span>
              <span>VIRTUAL EXPERIENCE</span>
            </div>

            <div className="journey-main">

              <h3>
                Tata
              </h3>

              <h4>
                Gen AI Powered Data Analytics
                Job Simulation
              </h4>

              <p>
                Completed a virtual job simulation
                focused on Gen AI powered data
                analytics.
              </p>

              <div className="journey-date">
                Certificate of Completion
                <span>02 SEP 2025</span>
              </div>

            </div>

          </div>


          {/* EXPLORING */}

          <div className="journey-item">

            <div className="journey-meta">
              <span>04</span>
              <span>EXPLORING</span>
            </div>

            <div className="journey-main">

              <h3>
                AI · Machine Learning ·
                Computer Vision
              </h3>

              <p>
                Exploring intelligent systems and
                interactive technology alongside
                full-stack development.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience