import './Featured.css';

const Featured = (props) => {
    return (
        <>
            <div className="featured">
                <div className="featured_text">{props.text}</div>
                <div className="featured_link"><a href="/">See All</a></div>
            </div>
        </>
    )
}

export default Featured;