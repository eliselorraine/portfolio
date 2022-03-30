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
            I am a full stack web developer who transitioned from a background
            in classical music. My coding journey began with HTML, CSS, and
            Javascript through courses on freeCodeCamp.org. After many hours
            of my own practice and my first certification in Responsive Web Design, I was selected as one of 38 students out of
            1000+ applications to participate in the intensive{" "}
            <a className="about_salt" href="https://salt.dev/">
              &lt;/salt&gt;
            </a>{" "}
            bootcamp in Stockholm, Sweden. Since graduation, I have continued to
            pursue my interests in frontend and mobile development with React
            and React Native.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
