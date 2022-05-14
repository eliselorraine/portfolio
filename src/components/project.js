import "../stylesheets/project.scss";

const Project = ({
  title,
  src,
  alt,
  github,
  description,
  linkDescription,
  live,
  liveDescription,
}) => {
  return (
    <div className="project">
      <div>
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>
        <span className="link-container">
          <a className="project-link" href={github}>
            {linkDescription}
          </a>
          {live ? 
          <a className="project-link" href={live}>
            {liveDescription}
          </a>
          : null
          }
        </span>
      </div>
      <img className="project-img" src={src} alt={alt}></img>
    </div>
  );
};

export default Project;
