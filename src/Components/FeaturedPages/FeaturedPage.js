import Boy from '../Images/BlackBoy.png';
import './FeaturedPage.css';
const FeaturedPage = () => {
    const imageStyle = {
        width : '550px',
        height: '400px'
    }
    return (
        <>
            <div className='featuredPage'>
                <div className='heading'>
                    <h1>Featured Products</h1>
                </div>
                <div className='picture'>
                    <img src={Boy} style={imageStyle} />
                </div>
            </div>
        </>
    )
}

export default FeaturedPage;