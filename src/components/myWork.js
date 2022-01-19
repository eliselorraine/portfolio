import '../stylesheets/myWork.scss'
import Tile from './tile'

const MyWork = () => {
    return (
        <section id="3">
            <div className="projects">
                <div className="tile-container">
                    <Tile source="todo.gif"
                        alt="to do list demo"
                        className="todo-tile"
                        title="To Do List"
                        description="A simple to do app built with React. It gives the user the ability to add a new task, edit the task, mark the task as done, and remove the task from their list. The app saves user's list on refresh."
                        tech="Tech stack: React, Redux, CSS, Jest"
                        link="https://github.com/eliselorraine/react-todo"
                        github="View the code (Github)" />
                    <Tile source="podcast.gif"
                        title="Hook: the Podcast App"
                        description="A fullstack Javascript application for the aspiring podcast listener. Using the Listen Notes API, the user can search for podcast episodes by keyword and save episodes to their list for later listening. Additionally, users can click on the episode thumbnails to view details about the podcast, plus paginate through earlier episodes as well as search results."
                        tech="Tech stack: React, CSS, NodeJS, ExpressJS"
                        link="https://github.com/eliselorraine/react-todo" 
                        github="View the code (Github)" />
                    <Tile
                        source="proCoScreenshot.png"
                        alt="proco photo"
                        title="ProCo"
                        description="A fullstack Javascript application for consulting firms and their employees. As a consultant you can register your availability and view your schedule, which is handled by the consulting firm. Consulting firms can use ProCo to assign consultants to companies, view their availability, and schedule them to work. They can also add companies and consultants to their roster. Authentication is required for use of ProCo, which is done through JSON web tokens."
                        tech="Tech stack: React, Redux, ElephantSQL, NodeJS, ExpressJS, JWT, CSS"
                        link="https://youtu.be/A1jlWxb8cx4"
                        github="View a demo (YouTube)" />
                </div>
            </div>
        </section>
    )
}

export default MyWork;