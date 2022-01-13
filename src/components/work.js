import '../stylesheets/work.scss'
import Tile from '../components/tile';
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


const Work = () => {
    return (
    <div>
        <div className="work_text-wrapper">
            <p className="work_text"><div className="work_text--title">Frontend:</div>
            <FaReact className="react-icon"/>React, 
            <SiRedux className="redux-icon"/>Redux, 
            <SiWebpack className="webpack-icon"/>Webpack, 
            {/* <GrGatsbyjs />Gatsby,  */}
            <SiHtml5 className="html-icon"/>HTML, 
            <SiCss3 className="css-icon"/>CSS, 
            <FaSass className="sass-icon"/>SASS</p>
            <p className="work_text"><div className="work_text--title">Backend:</div>
            <IoLogoNodejs className="node-icon"/>NodeJS, 
            <SiExpress className="express-icon"/>ExpressJS, 
            REST, 
            <SiGraphql className="graphql-icon"/>GraphQL, 
            <SiMongodb className="mongodb-icon"/>MongoDB, 
            <SiPostgresql className="postgresql-icon"/>PostgreSQL</p>
            <p className="work_text"><div className="work_text--title">Tools and technologies:</div> 
            <SiVisualstudio className="vscode-icon"/>Visual Studio Code, 
            {/* Handlebars/Mustache,  */}
            <SiMocha className="mocha-icon"/>Mocha,
            <SiJest className="jest-icon"/>Jest, 
            <SiDocker className="docker-icon"/>Docker, 
            <FaGitAlt className="git-icon"/>Git+<DiGithubFull className="github-text-icon"/>, 
            <SiGithubactions className="actions-icon"/>GitHub Actions, 
            <FaAws className="aws-icon"/>AWS, Cloud Platforms (MongoDB Atlas, ElephantSQL, 
            <SiNetlify className="netlify-icon"/>Netlify, 
            <SiHeroku className="heroku-icon"/>Heroku, 
            <SiContentful className="contentful-icon"/>Contentful), TDD, Agile work methods</p>
        </div>
        <Tile />
    </div>
    )
}

export default Work; 