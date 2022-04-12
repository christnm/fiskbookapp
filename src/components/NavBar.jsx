import { useLocation, Link, useState } from 'react-router-dom'
import FiskBook from '../Pictures/FiskBookFinal.png'
import '../NavBar.css'





const NavBar = () => {


    return (
        <>
            <nav>
                <div className="img-container">
                    <img className="img" src={FiskBook} height="95" width="250" alt="" />
                    <h1 className="gradient shimmer"><a href="">FiskBook</a></h1>
                    <p className="gradient shimmer">...The Book To Your Success</p>
                </div>

                <div className="nav-list">
                    <Link to="/" >HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/main">POSTS</Link>
                    <Link to="/fiskies" >FISKITES WRITE</Link>
                    <Link to="/Faq">FAQs</Link>
                    <Link to="/contactUs">CONTACT US</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
