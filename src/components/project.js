import "../stylesheets/project.scss";

const Project = ({ 
    title,
    src, 
    alt, 
    github, 
    description,
    linkDescription
}) => {
  return (
    <div className="project">
      <div>
        <h1 className="project-title">{title}</h1>
        <p className="project-description">
          {description}
        </p>
        <a className="project-link" href={github}>{linkDescription}</a>
      </div>
      <img className="project-img" src={src} alt={alt}></img>
    </div>
  );
};

export default Project;
