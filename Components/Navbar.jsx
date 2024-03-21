import { useEffect, useState } from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-scroll';
import Menu from '../images/menu-icon.png'
function Navbar() {

  const [stiky, setStiky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setStiky(true) : setStiky(false);
    })
  })
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <>
    <nav className={`navbar container ${stiky && 'dark-nav'}`}>
        <img src={Logo} alt="" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li> <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li> <Link to='about ' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500}  className='btn'>Contact us</Link></li>
        </ul>
         <img src={Menu} alt="" className='menu__icon' onClick={toggleMenu}/>
    </nav>
    </>
  )
}

export default Navbar