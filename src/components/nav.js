import '../stylesheets/nav.scss'

import { FiGithub } from 'react-icons/fi'
import { IoLogoLinkedin } from 'react-icons/io'
import { GoLogoGithub } from 'react-icons/go'

const Nav = () => {
    return (
        <div className="nav_wrapper">
            <ul className="nav_list">
                <li className="nav_link nav_link--li"><a href="#1" className="nav_link nav_link--router" to="/">home</a></li>
                <div className="nav_border"></div>
                <li className="nav_link nav_link--li"><a href="#2" className="nav_link nav_link--router" to="/about">about</a></li>
                <div className="nav_border"></div>
                <li className="nav_link nav_link--li"><a href="#3" className="nav_link nav_link--router" to="/work">my work</a></li>
                <div className="nav_border"></div>
                <li className="nav_link nav_link--li"><a href="#4" className="nav_link nav_link--router" to="/contact">contact</a></li>
                <div className="nav_border"></div>
                <div className="icon-container">
                    <a className="icon" href="https://github.com/eliselorraine"><GoLogoGithub className="github-text" /></a>
                    <a className="icon" href="https://github.com/eliselorraine"><FiGithub className="github-icon" /></a>
                    <a className="icon" href="https://www.linkedin.com/in/elise-lawrence-2bb036190/"><IoLogoLinkedin className="linkedin-icon" /></a>
                </div>
                <div className="nav_corner">
                </div>
            </ul>
        </div>
    )
}

export default Nav;