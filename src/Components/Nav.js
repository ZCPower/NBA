import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav.css'

function Nav() {
    return (
        <nav>
            <div id='logo'>
                <Link to='/'>
                    <img src='https://img.icons8.com/external-flat-amoghdesign/344/external-ball-olympic-games-flat-amoghdesign-2.png'>
                    </img>
                    <h1>Ball</h1>
                </Link>
            </div>
            <ul id='navLinks'>
                {/* //I would like to add logos for each button.*/}
                <li><Link to='/teams'>Teams</Link></li>
                <li><Link to='/seasons'>Seasons</Link></li>
                <li><Link to='/players'>Players</Link></li>
            </ul>
        </nav >
    )
}

export default Nav