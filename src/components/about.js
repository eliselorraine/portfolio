import "../stylesheets/about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="about_wrapper">
          <p className="quote">
            For me, creativity is the key to great solutions.
          </p>
          <p className="about_paragraph">
            I am a Full Stack Software Developer who transitioned from a
            background in music. My coding journey started in February 2021,
            when I started playing with HTML, CSS, and Javascript through
            courses on freeCodeCamp.org. I was quickly hooked, and after many
            hours of my own practice I found myself invited to participate in
            the intensive{" "}
            <a className="about_salt" href="https://salt.dev/">
              &lt;/salt&gt;
            </a>{" "}
            bootcamp in Stockholm, Sweden. Since graduation, I have
            continued to pursue my interests in frontend and mobile development
            with React and React Native.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
