import '../stylesheets/footer.scss'

const Footer = () => {
    return (
        <div className="footer_container">
            <ul className="footer_ul">
                <a href="#home" className="footer_link">home</a>
                <a href="#about" className="footer_link">about</a>
                <a href="#projects" className="footer_link">projects</a>
                <a href="#contact" className="footer_link">contact</a>
            </ul>
        </div>
    )
}

export default Footer;