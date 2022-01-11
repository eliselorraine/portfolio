import '../stylesheets/contact.scss'

const Contact = () => {
    return (
        <div className="contact_container">
            <form className="contact_form">
                <label htmlFor="subject">Reason for your inquiry:</label>
                <input id="subject" placeholder="Subject"></input>
                <label htmlFor="inquiry">Inquiry</label>
                <input id="inquiry" placeholder="Write your inquiry here..."></input>
            </form>
        </div>
    )
}

export default Contact;