import "../stylesheets/skills.scss";
import Skill from "./skill";

const Skills = () => {
  const skills = [
    { title: "JavaScript", type: "language" },
    { title: "TypeScript", type: "language" },
    { title: "HTML5", type: "language" },
    { title: "CSS3", type: "language" },
    { title: "Sass", type: "language" },
    { title: "SQL", type: "language" },
    { title: "React", type: "framework" },
    { title: "React Native", type: "framework" },
    { title: "NextJS", type: "frontend" },
    { title: "NestJS", type: "backend" },
    { title: "NodeJS", type: "backend" },
    { title: "Docker", type: "backend" },
    { title: "ExpressJS", type: "backend" },
    { title: "GraphQL", type: "tool" },
    { title: "PostgreSQL", type: "tool" },
    { title: "MongoDB", type: "tool" },
    { title: "Jest", type: "tool" },
    { title: "Mocha", type: "tool" },
    { title: "Chai", type: "tool" },
    { title: "REST", type: "tool"},
  ];

  return (
    <>
      <h1 className="skills-header">Skills &amp; Technologies</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          return <Skill name={skill.title} type={skill.type}/>;
        })}
      </div>
    </>
  );
};

export default Skills;
