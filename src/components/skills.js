import '../stylesheets/skills.scss'
import { FaReact, FaSass, FaGitAlt, FaAws } from 'react-icons/fa';
// import { GrGatsbyjs } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { DiGithubFull } from 'react-icons/di';
import { SiRedux, 
    SiWebpack, 
    SiHtml5, 
    SiGraphql, 
    SiMongodb, 
    SiPostgresql, 
    SiExpress, 
    SiCss3,
    SiVisualstudio,
    SiMocha, 
    SiJest,
    SiDocker, 
    SiGithubactions, 
    SiNetlify,
    SiHeroku, 
    SiContentful } from 'react-icons/si';


const Skills = () => {
    return (
        <div className="work_text-wrapper">
            {/* <div className="work_text--title">Languages:</div>
            <p className="work_text">Javascript &amp; TypeScript</p> */}
            <div className="work_text--title">Frontend:</div>
            <p className="work_text">
                Javascript/Typescript
            <FaReact className="skills-icon react-icon"/>React/React Native, &nbsp;
            <SiRedux className="skills-icon redux-icon"/> Redux, &nbsp;  
            <SiWebpack className="skills-icon webpack-icon"/> Webpack, &nbsp; 
            {/* <GrGatsbyjs />Gatsby,  */}
            <SiHtml5 className="skills-icon html-icon"/> HTML, &nbsp; 
            <SiCss3 className="skills-icon css-icon"/> CSS, &nbsp;
            <FaSass className="skills-icon sass-icon"/> SASS</p>
            <div className="work_text--title">Backend:</div>
            <p className="work_text">
            Javascript/Typescript
            <IoLogoNodejs className="skills-icon node-icon"/>NodeJS, &nbsp; 
            <SiExpress className="skills-icon express-icon"/>ExpressJS, &nbsp;
            REST, &nbsp;
            <SiGraphql className="skills-icon graphql-icon"/>GraphQL, &nbsp; 
            <SiMongodb className="skills-icon mongodb-icon"/>MongoDB, &nbsp;
            <SiPostgresql className="skills-icon postgresql-icon"/>PostgreSQL</p>
            <div className="work_text--title">Tools and technologies:</div>
            <p className="work_text"> 
            <SiVisualstudio className="skills-icon vscode-icon"/>Visual Studio Code, &nbsp;
            {/* Handlebars/Mustache,  */}
            <SiDocker className="skills-icon docker-icon"/>Docker, &nbsp;
            <FaGitAlt className="skills-icon git-icon"/>Git, &nbsp;<DiGithubFull className="github-text-icon"/>, 
            <SiGithubactions className="skills-icon actions-icon"/>GitHub Actions, &nbsp;
            <FaAws className="skills-icon aws-icon"/>AWS, &nbsp; 
            <SiMocha className="skills-icon mocha-icon"/>Mocha, &nbsp;
            &nbsp;<SiJest className="skills-icon jest-icon"/>Jest, &nbsp; 
            Cloud Platforms (MongoDB Atlas, &nbsp; ElephantSQL, &nbsp;
            <SiNetlify className="skills-icon netlify-icon"/>Netlify, &nbsp;
            <SiHeroku className="skills-icon heroku-icon"/>Heroku, &nbsp;
            <SiContentful className="skills-icon contentful-icon"/>Contentful), &nbsp; TDD, &nbsp; Agile work methods</p>
        </div>
    )
}

export default Skills; 