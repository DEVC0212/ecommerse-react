import HairGirl from '../Images/girlHair.png';
import './RecommendedPage.css';
const RecommendedPage = () => {
    const imageStyle = {
        width : '550px',
        height: '400px'
    }
    return (
        <>
            <div className='recommendedPage'>
                <div className='recommendedHeading'>
                    <h1>Recommended Products</h1>
                </div>
                <div className='picture'>
                    <img src={HairGirl} style={imageStyle} />
                </div>
            </div>
        </>
    )
}

export default RecommendedPage;