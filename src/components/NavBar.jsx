import { useLocation, Link, useState } from 'react-router-dom'
import FiskBook from '../Pictures/FiskBookFinal.png'
import '../NavBar.css'





const NavBar = () => {
  const location = useLocation()
  let activeHome = false
  let activeMain = false
  let activeAbout = false
  let activeFiskies = false
  let activeFaq = false
  let activeCont = false

  if (location.pathname === '/') {
    activeHome = true
  }
  if (location.pathname === '/main') {
    activeMain = true
  }
  if (location.pathname === '/about') {
    activeAbout = true
  }
  if (location.pathname === '/fiskies') {
    activeFiskies = true
  }
  if (location.pathname === '/faq') {
    activeFaq = true
  }
  if (location.pathname === '/contactus') {
    activeCont = true
  }
    return (
        <>
            <nav>
                <div className="img-container">
                    <img className="img" src={FiskBook} height="95" width="250" alt="" />
                    <h1 className="gradient shimmer"><a href="">FiskBook</a></h1>
                    <p className="gradient shimmer">...The Book To Your Success</p>
                </div>

                <div className="nav-list">
                    <Link to="/" className={activeHome ? 'active item' : 'item'} >HOME</Link>
                    <Link to="/about" className={activeAbout ? 'active item' : 'item'}>ABOUT US</Link>
                    <Link to="/main" className={activeMain ? 'active item' : 'item'}>POSTS</Link>
                    <Link to="/fiskies" className={activeFiskies ? 'active item' : 'item'} >FISKITES WRITE</Link>
                    <Link to="/Faq" className={activeFaq ? 'active item' : 'item'}>FAQs</Link>
                    <Link to="/contactUs" className={activeCont ? 'active item' : 'item'}>CONTACT US</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
