import '../stylesheets/myWork.scss'

const Tile = (props) => {
    return (
        <div className="tile" alt="project">
            <div className="tile_description">
                <img className="tile_demo-gif" src={props.source} alt={props.alt}></img>
                <h3 className="tile_title">{props.title}</h3>
                <p className="tile_description--long" >{props.description}</p>
                <p>{props.tech}</p>
                <a href={props.link}>{props.github}</a>
            </div>
        </div>
    )
}

export default Tile;