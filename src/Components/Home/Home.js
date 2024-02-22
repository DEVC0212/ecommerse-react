import { useContext, useEffect} from 'react';
import Body from '../Body/Body';
import Featured from '../Body/Featured';
import FeaturedSunglass from '../Body/FeaturedSunglass';
import AddToCart from '../Context/AddToCart';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const {closeCartHandler} = useContext(AddToCart);
  // useEffect(()=>{
  //   props.resetHandler();
  // });
  const productStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1300px',
    width: '100%',
    margin: 'auto'
  }

  return (
    <>
      <div onClick={closeCartHandler}>
        <Body />
        <Featured text="Featured Products" link="/featured" />
        <div style={productStyle}>
          {props.productNames.slice(0,3).map(product=>(
            <Link to={`/shop/product/${product.id}`} key={product.id}>
              <FeaturedSunglass productName={product} />
            </Link>
          ))}
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