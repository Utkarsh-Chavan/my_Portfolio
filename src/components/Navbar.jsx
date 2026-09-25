function Navbar() {
    return (
      <header className="navbar">
        <a href="#top" className="navbar-logo">
          NIL<span>.</span>
        </a>
  
        <nav className="navbar-links">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#experience">Journey</a>
  <a href="#contact">Contact</a>
</nav>
  
        <button className="navbar-menu" aria-label="Open menu">
          <span></span>
          <span></span>
        </button>
      </header>
    )
  }
  
  export default Navbar