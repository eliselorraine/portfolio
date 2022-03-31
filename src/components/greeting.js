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
          I am a full-stack web developer based in Oslo, Norway who is
          passionate about coding and technology.
        </h2>
        <Skills />
      </div>
    </section>
  );
};

export default Greeting;
