// import TypeIt from "typeit-react";
import '../stylesheets/greeting.scss'
import Skills from '../components/skills'

const Greeting = () => {
    return (
        <section id="1">
            <div className="greeting_wrapper">
                <h1 className="greeting_intro">Hi, I'm Elise.</h1>
                <h2 className="greeting_details">I am a newly minted web developer based in Oslo, Norway who is passionate about coding and frontend technology.</h2>
                <p className="greeting_checkout">check out some of my projects <a href="#3" to="/work" className="here-button">here</a></p>
                <Skills />
            </div>
        </section>
    )
}

export default Greeting;