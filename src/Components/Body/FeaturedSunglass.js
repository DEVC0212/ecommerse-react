import './FeaturedSunglass.css';

const FeaturedSunglass = (props) => {
    const imageStyle = {
        width: '350px',
        height: '200px'
    }
    return (
        <>
            <div className='container'>
                <div className='photo'><img src={props.img} style={imageStyle} /></div>
                <div className='sentence'>
                    <h2>{props.productName.name}</h2>
                    <i>{props.productName.style}</i>
                </div>
            </div>
        </>
    )
}

export default FeaturedSunglass;