import './Featured.css';
import {Link} from 'react-router-dom'
const Featured = (props) => {
    return (
        <>
            <div className="featured">
                <div className="featured_text">{props.text}</div>
                <div className="featured_link"><Link to={props.link}>See All</Link></div>
            </div>
        </>
    )
}

export default Featured;