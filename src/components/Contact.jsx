function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-label">
        05 / CONTACT
      </div>

      <div className="contact-content">

        <div className="contact-heading">

          <span>
            HAVE SOMETHING IN MIND?
          </span>

          <h2>
            Let's build
            <br />
            something.
          </h2>

        </div>


        <div className="contact-intro">

          <p>
            I'm always interested in building
            useful things, exploring new ideas
            and working with people who care
            about what they create.
          </p>

        </div>


        <div className="contact-action">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chavanutkarsh707@gmail.com"
          >
            GET IN TOUCH
            <span>↗</span>
          </a>

        </div>


        <div className="contact-links">

          <a
            href="https://github.com/Utkarsh-Chavan"
            aria-label="GitHub"
          >
            <span>GITHUB</span>
            <span>↗</span>
          </a>

          <a
  href="https://www.linkedin.com/in/utkarsh-chavan-656853247"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <span>LINKEDIN</span>
  <span>↗</span>
</a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chavanutkarsh707@gmail.com"
          >
            <span>EMAIL</span>
            <span>↗</span>
          </a>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  aria-label="Resume"
>
  <span>RESUME</span>
  <span>↗</span>
</a>

        </div>


        <footer className="contact-footer">

          <span>
            NIL.
          </span>

          <span>
            FULL-STACK DEVELOPER
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

        </footer>

      </div>
    </section>
  )
}

export default Contact