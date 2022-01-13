// import TypeIt from "typeit-react";
import '../stylesheets/greeting.scss'
import { Link } from 'react-router-dom';
import Skills from '../components/skills'

const Greeting = () => {
    return (
        <div className="greeting_wrapper">
            <h1 className="greeting_intro">Hi, I'm Elise.</h1>
            <h2 className="greeting_details">I am a newly minted web developer based in Oslo, Norway who is passionate about coding and frontend technology.</h2>
            <p className="greeting_checkout">check out some of my projects <Link to="/work" className="here-button">here</Link></p>
            <Skills />
        </div>
    )
}

export default Greeting;