import { Container } from './styles'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"< Tanvir"}</span>
          <span>{" Mahmud />"}</span>
        </HashLink>
        
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
          <NavHashLink smooth to="#experiences" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#skills" onClick={closeMenu}>
            Skills
          </NavHashLink>
          <NavHashLink smooth to="#educations" onClick={closeMenu}>
            Education
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Achievements 
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
        <label htmlFor="switch">Toggle</label>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
