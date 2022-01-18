import '../stylesheets/myWork.scss'

const Tile = (props) => {
    return (
        <div className="tile" alt="project">
            <div className="tile_description">
                <h3 className="tile_title">{props.title}</h3>
                <p className="tile_description--long" >{props.description}</p>
                <p>{props.tech}</p>
                <a href={props.link}>View the code (Github)</a>
            </div>
        </div>
    )
}

export default Tile;