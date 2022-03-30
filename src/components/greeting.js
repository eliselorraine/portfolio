// import TypeIt from "typeit-react";
import "../stylesheets/greeting.scss";
import Skills from "../components/skills";
import { MdWavingHand } from "react-icons/md";

const Greeting = () => {
  return (
    <section id="home">
      <div className="greeting_wrapper">
        <span className="hello-icon-container">
          <h1 className="greeting_intro">Hi, I'm Elise.</h1>
          <MdWavingHand className="hello-icon" />
        </span>
        <h2 className="greeting_details">
          I am a web developer based in Oslo, Norway who is
          passionate about coding and frontend technology.
        </h2>
        {/* <p className="greeting_checkout">check out some of my projects</p>
                        <RoughNotation color="#1f554e" type="highlight" show="true">
                            <a href="#3" to="/work" className="here-button">here</a>
                        </RoughNotation> */}
        <Skills />
      </div>
    </section>
  );
};

export default Greeting;
