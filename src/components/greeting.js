// import TypeIt from "typeit-react";
import '../stylesheets/greeting.scss'
import Skills from '../components/skills'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Greeting = () => {

    return (
        <section id="1">
            <div className="greeting_wrapper">
                <h1 className="greeting_intro">Hi, I'm Elise.</h1>
                <h2 className="greeting_details">I am a newly minted web developer based in Oslo, Norway who is passionate about coding and frontend technology.</h2>
                    <p className="greeting_checkout">check out some of my projects</p>
                        <RoughNotation padding='15px' color="#1f554e" type="circle" show="true">
                            <a href="#3" to="/work" className="here-button">here</a>
                        </RoughNotation>
                <Skills />
            </div>
        </section>
    )
}

export default Greeting;