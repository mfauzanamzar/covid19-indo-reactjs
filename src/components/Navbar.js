import React from 'react'
import logo from '../pictures/kkn.png'

const Navbar = () => {
    return (
        <div className="navbar-container">
        <div className="container">
            <div className="navbar">
                <div className="left-text"><h1>Covid19</h1></div>
                <div className="center-text"><img src={logo}/></div>
                <div className="right-text">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
