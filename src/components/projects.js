import "../stylesheets/projects.scss";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        <div className="tile-container">
          <Project
            title="Hook: The Podcast App"
            src="podcast.gif"
            alt="Hook: the Podcast App"
            github="https://github.com/eliselorraine/reactNativePodcast"
            description="Want to discover more podcasts but not sure where to start? Search through hundreds of podcast episodes using Hook: the Podcast App!"
            linkDescription="See the code"
          />
          <Project
            title="ProCo"
            src="proCoScreenshot.png"
            alt="ProCo: The Consulting App"
            github="https://www.youtube.com/watch?v=A1jlWxb8cx4"
            description="Made for consulting firms and their employees. Consultants can enter their availability and view their schedules. Consulting firms can view consultants' availability and schedule assignments around it."
            linkDescription="Watch a demo"
          />
          <Project
            title="TypeScript Calculator"
            src="TypeScript.gif"
            alt="TypeScript Calculator"
            github="https://github.com/eliselorraine/typescriptCalculator"
            description="A simple calculator I made with TypeScript. Add, subtract, multiply and divide any two numbers."
            linkDescription="See the code"
          />
          <Project
            title="To Do List"
            src="react-todo.gif"
            alt="To Do with React/Redux"
            github="https://github.com/eliselorraine/react-todo"
            description="Everyone knows you can't become a developer without making a few to do apps. Mine uses Redux to manage adding, editing, and deleting tasks."
            linkDescription="See the code"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
