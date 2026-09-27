import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a href="#top" className="navbar-logo" onClick={closeMenu}>
        NIL<span>.</span>
      </a>

      <nav className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Journey</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <button
        className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Navbar