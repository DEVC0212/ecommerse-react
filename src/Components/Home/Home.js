import Body from '../Body/Body';
import Featured from '../Body/Featured';
import FeaturedSunglass from '../Body/FeaturedSunglass';

const Home = (props) => {
  props.resetHandler();
  const productStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1300px',
    width: '100%',
    margin: 'auto'
  }

  return (
    <>
      <div>
        <Body />
        <Featured text="Featured Products" link="/featured" />
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
        <Featured text="Recommended Products" link="/recommended" />
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[6]} img={props.productNames[6].image} />
          <FeaturedSunglass productName={props.productNames[7]} img={props.productNames[7].image} />
          <FeaturedSunglass productName={props.productNames[8]} img={props.productNames[8].image} />
        </div>
        <div style={productStyle}>
          <FeaturedSunglass productName={props.productNames[9]} img={props.productNames[9].image} />
          <FeaturedSunglass productName={props.productNames[10]} img={props.productNames[10].image} />
          <FeaturedSunglass productName={props.productNames[11]} img={props.productNames[11].image} />
        </div>
      </div>
    </>
  )
}

export default Home;