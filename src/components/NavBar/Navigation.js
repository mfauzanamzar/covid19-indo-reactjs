import React from 'react'
import logo from '../../pictures/kkn.png'
import logoF from '../../pictures/Fauzan.png'

const Navigation = () => {
    return (
        <div className="container">
            <div className="navbar">
            <div className="left-text"><a href='/'><img src={logoF} alt="logo"/></a></div>
                <div className="center-text"><img src={logo} alt="logo-kmb"/></div>
                <div className="right-text">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
