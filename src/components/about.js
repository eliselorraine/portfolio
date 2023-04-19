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
            in classical music. Experienced with a variety of tools and technologies, 
            ranging from important infrastructure tools to modern frontend frameworks.
            Most importantly I enjoy learning.

            In 2021 I was selected as one of 38 students out of
            1000+ applications to participate in the intensive{" "}
            <a className="about_salt" href="https://salt.dev/">
              &lt;/salt&gt;
            </a>{" "}
            bootcamp in Stockholm, Sweden. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
