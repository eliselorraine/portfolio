import '../stylesheets/contact.scss'
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const from_name = document.getElementById('from_name');
    const user_email = document.getElementById('user_email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const [toSend, setToSend] = useState({
        from_name: '',
        user_email: '',
        subject: '',
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
            user_email.value = '';
            subject.value = '';
            message.value = '';
        }).then(() => {
            setToSend({
                from_name: '',
                user_email: '',
                subject: '',
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
                <input name="user_email" className="contact_input" id="user_email" placeholder="Email"></input>
                <label className="contact_label" htmlFor="subject">Reason for your inquiry:</label>
                <input name="subject" className="contact_input" id="subject" placeholder="Subject"></input>
                <label className="contact_label" htmlFor="inquiry">What would you like to be in touch about?</label>
                <textarea name="message" className="contact_input contact_input--inquiry" id="message" placeholder="Write your inquiry here..." onChange={handleChange}></textarea>
                <div className="contact_button-container"><button className="contact_button--submit" type="submit" onClick={handleSubmit}>Submit</button></div>
            </form>
        </div>
    )
}

export default Contact;