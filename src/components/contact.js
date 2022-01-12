import '../stylesheets/contact.scss'
import { useState } from 'react';
import { send } from 'emailjs-com';
// require('dotenv').config({ path: `portfolio-site/.env` });

const Contact = () => {
    const from_name = document.getElementById('from_name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'SERVICE ID',
            'TEMPLATE ID',
            toSend,
            'USER ID',
        ).then((response) => {
            console.log('Success!', response.status, response.text)
            from_name.value = '';
            email.value = '';
            message.value = '';
        }).then(() => {
            setToSend({
                from_name: '',
                email: '',
                message: '',
            })
        }).catch((err) => {
            console.log('Failed :(', err)
        })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    return (
        <div className="contact_container">
            <form onSubmit={handleSubmit} className="contact_form">
                <label className="contact_label" htmlFor="from_name">Name:</label>
                <input name="from_name" className="contact_input" id="from_name" placeholder="Your Name" onChange={handleChange}></input>
                <label className="contact_label" htmlFor="email">Email:</label>
                <input type="email" name="email" className="contact_input" id="email" placeholder="Email" onChange={handleChange}></input>
                <label className="contact_label" htmlFor="inquiry">What would you like to be in touch about?</label>
                <textarea name="message" className="contact_input contact_input--inquiry" id="message" placeholder="Write your message here..." onChange={handleChange}></textarea>
                <div className="contact_button-container"><button className="contact_button--submit" type="submit" onClick={handleSubmit}>Submit</button></div>
            </form>
        </div>
    )
}

export default Contact;