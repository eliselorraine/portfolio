import '../stylesheets/footer.scss'

import { AiTwotoneHome } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { GrProjects } from 'react-icons/gr'
import { MdContactMail } from 'react-icons/md'


const Footer = () => {
    return (
        <div className="footer_container">
            <ul className="footer_ul">
                <a href="#1" className="footer_link">home</a>
                <a href="#2" className="footer_link">about</a>
                <a href="#3" className="footer_link">projects</a>
                <a href="#4" className="footer_link">contact</a>
            </ul>
        </div>
    )
}

export default Footer;