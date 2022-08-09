import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import menuIcon from '../assets/img/menu-icon.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
console.log(activeLink);
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">Joseph <span>Bajegbo</span></Link>
          {/* <img src={logo} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {/* <span className="navbar-toggler-icon"></span> */}
          <img src={menuIcon} alt="" style={{height: "36px", filter: "invert(100%)", transform: "rotateY(180deg)"}} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-link" : "navbar-link" } onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active navbar-link" : "navbar-link" } onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active navbar-link" : "navbar-link" } onClick={() => onUpdateActiveLink('about')}>About me</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active navbar-link" : "navbar-link" } onClick={() => onUpdateActiveLink('contact')}>Contact me</NavLink>
          </Nav>
          {/* <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;