import '../stylesheets/myWork.scss'

const MyWork = () => {
    return (
        <>
        <div className="tile-container">
            <img className="tile tile--podcast" src="podcast.gif" alt="podcast app demo"/>
            <div className="tile_description">
                <p>A fullstack Javascript application for the aspiring podcast listener. Using the Listen Notes API, the user can search for podcast episodes by keyword and save episodes to their list for later listening. Additionally, users can click on the episode thumbnails to view details about the podcast, plus paginate through earlier episodes as well as search results.</p> 
                <p>Tech stack: React, CSS, NodeJS, ExpressJS</p>
                <a href="https://github.com/eliselorraine/react-todo">View the code (Github)</a>
            </div>
        </div>  
        <div className="tile-container">
            <img className="tile tile--todo" src="todo.gif" alt="to do app demo"/>
            <div className="tile_description">
                <p>A simple to do app built with React. It gives the user the ability to add a new task, edit the task, mark the task as done, and remove the task from their list. The app saves user's list on refresh.</p> 
                <p>Tech stack: React, Redux, CSS, Jest</p>
                <a href="https://github.com/eliselorraine/Podcast-App">View the code (Github)</a>
            </div>
        </div>
        </>
    )
}

export default MyWork;