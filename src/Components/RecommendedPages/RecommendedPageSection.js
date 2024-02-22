import RecommendedPage from "./RecommendedPage";
import FeaturedSunglass from "../Body/FeaturedSunglass";
import { Link } from "react-router-dom";
const RecommendedPageSection = (props) => {
    // props.resetHandler();
    const productStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1300px',
        width: '100%',
        margin: 'auto'
      }
      const recommendedProductStyle = {
        marginTop: "50px"
      }
    return (
        <>
        <RecommendedPage />
        <div style={recommendedProductStyle}>
        <div style={productStyle}>
          {props.productNames.slice(6,9).map((product,index)=>(
            <Link to={`/shop/product/${product.id}`} key={index} >
              <FeaturedSunglass productName={product} />
            </Link>
          ))}
        </div>
        <div style={productStyle}>
        {props.productNames.slice(9,12).map((product,index)=>(
            <Link to={`/shop/product/${product.id}`} key={index} >
              <FeaturedSunglass productName={product} />
            </Link>
          ))}
        </div>
        </div>
        </>
    )
}

export default RecommendedPageSection;