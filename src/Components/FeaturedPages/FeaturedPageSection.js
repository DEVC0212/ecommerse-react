import FeaturedPage from "./FeaturedPage";
import FeaturedSunglass from "../Body/FeaturedSunglass";
import { Link } from "react-router-dom";
const FeaturedPageSection = (props) => {
    // props.resetHandler();
    const productStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1300px',
        width: '100%',
        margin: 'auto'
      }
      const featuredProductStyle = {
        marginTop: "50px"
      }
    return (
        <>
        <FeaturedPage />
        <div style={featuredProductStyle}>
        <div style={productStyle}>
        {props.productNames.slice(0, 3).map((product, index) => (
            <Link key={index} to={`/shop/product/${product.id}`}>
              <FeaturedSunglass productName={product} />
            </Link>
          ))}
        </div>
        <div style={productStyle}>
          {props.productNames.slice(3, 6).map((product, index) => (
            <Link key={index} to={`/shop/product/${product.id}`}>
              <FeaturedSunglass productName={product} />
            </Link>
          ))}
        </div>
        </div>
        </>
    )
}

export default FeaturedPageSection;