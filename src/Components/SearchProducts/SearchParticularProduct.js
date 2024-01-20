import './SearchProducts.css';
const SearchParticularProduct = (props) => {
    const imageStyle = {
        width: '160px',
        height: '90px'
    }
    return(
        <>
            <div className='box'>
                <div className='image'><img src={props.img} style={imageStyle} /></div>
                <div className='text'>
                    <h2>{props.name}</h2>
                    <i>{props.style}</i>
                </div>
                <div className='price'>
                    <h3>${props.price}.00</h3>
                </div>
                <div className='basket'>
                    <p><a href='/'>Add to basket</a></p>
                </div>
            </div>
        </>
    )
}

export default SearchParticularProduct;