import RecommendedPage from "./RecommendedPage";
import FeaturedSunglass from "../Body/FeaturedSunglass";
const RecommendedPageSection = (props) => {
    props.resetHandler();
    const productStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1300px',
        width: '100%',
        margin: 'auto'
      }
      const recommendedProductStyle = {
        marginTop: "120px"
      }
    return (
        <>
        <RecommendedPage />
        <div style={recommendedProductStyle}>
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[0]} img={props.productNames[6].image} />
          <FeaturedSunglass productName={props.productNames[1]} img={props.productNames[7].image} />
          <FeaturedSunglass productName={props.productNames[2]} img={props.productNames[8].image} />
        </div>
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[3]} img={props.productNames[9].image} />
          <FeaturedSunglass productName={props.productNames[4]} img={props.productNames[10].image} />
          <FeaturedSunglass productName={props.productNames[5]} img={props.productNames[11].image} />
        </div>
        </div>
        </>
    )
}

export default RecommendedPageSection;