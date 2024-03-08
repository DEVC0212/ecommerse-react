import { useContext, useEffect} from 'react';
import Body from '../Body/Body';
import Featured from '../Body/Featured';
import FeaturedSunglass from '../Body/FeaturedSunglass';
import AddToCart from '../Context/AddToCart';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Home = (props) => {
  const {closeCartHandler, setProductDetail} = useContext(AddToCart);
  const location = useLocation();

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
              <FeaturedSunglass productName={product} />
          ))}
        </div>
        <div style={productStyle}>
        {props.productNames.slice(3,6).map(product=>(
              <FeaturedSunglass productName={product} />
          ))}
        </div>
        <Featured text="Recommended Products" link="/recommended" />
        <div style={productStyle}>
        {props.productNames.slice(6,9).map(product=>(
              <FeaturedSunglass productName={product} />
          ))}
        </div>
        <div style={productStyle}>
        {props.productNames.slice(9,12).map(product=>(
              <FeaturedSunglass productName={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;