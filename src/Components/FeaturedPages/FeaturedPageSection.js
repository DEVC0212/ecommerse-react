import FeaturedPage from "./FeaturedPage";
import FeaturedSunglass from "../Body/FeaturedSunglass";
const FeaturedPageSection = (props) => {
    props.resetHandler();
    const productStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1300px',
        width: '100%',
        margin: 'auto'
      }
      const featuredProductStyle = {
        marginTop: "120px"
      }
    return (
        <>
        <FeaturedPage />
        <div style={featuredProductStyle}>
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[0]} img={props.productNames[0].image} />
          <FeaturedSunglass productName={props.productNames[1]} img={props.productNames[1].image} />
          <FeaturedSunglass productName={props.productNames[2]} img={props.productNames[2].image} />
        </div>
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[3]} img={props.productNames[3].image} />
          <FeaturedSunglass productName={props.productNames[4]} img={props.productNames[4].image} />
          <FeaturedSunglass productName={props.productNames[5]} img={props.productNames[5].image} />
        </div>
        </div>
        </>
    )
}

export default FeaturedPageSection;