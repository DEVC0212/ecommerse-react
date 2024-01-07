import Body from '../Body/Body';
import Featured from '../Body/Featured';
import FeaturedSunglass from '../Body/FeaturedSunglass';
import Image1 from '../Images/img1.png';
import Image2 from '../Images/img2.png';
import Image3 from '../Images/img3.png';
import Image4 from '../Images/img4.png';
import Image5 from '../Images/img5.png';
import Image6 from '../Images/img6.png';
import Image7 from '../Images/img7.png';
import Image8 from '../Images/img8.png';
import Image9 from '../Images/img9.png';
import Image10 from '../Images/img10.png';
import Image11 from '../Images/img11.png';
import Image12 from '../Images/img12.png';

const Home = (props) => {
  const productNames = [
    {
      name: 'Burnikk',
      style: 'Sexbomb',
      image: Image1
    },
    {
      name: 'Kibal Batal',
      style: 'Kibal Black',
      image: Image2
    },
    {
      name: 'Very Nice',
      style: 'Salt Maalat',
      image: Image3
    },
    {
      name: 'Buldit',
      style: 'Salt Maalat',
      image: Image4
    },
    {
      name: 'Balakubak',
      style: 'Betsin Maalat',
      image: Image5
    },
    {
      name: 'Tiktilaok Manok',
      style: 'Sexbomb',
      image: Image6
    },
    {
      name: 'Burnikk',
      style: 'Sexbomb',
      image: Image7
    },
    {
      name: 'Kibal Batal',
      style: 'Kibal Black',
      image: Image8
    },
    {
      name: 'Very Nice',
      style: 'Salt Maalat',
      image: Image9
    },
    {
      name: 'Kulangot',
      style: 'Salt',
      image: Image10
    },
    {
      name: 'Sipon Malapot',
      style: 'Salt',
      image: Image11
    },
    {
      name: 'Pitaklan',
      style: 'Black Kibal',
      image: Image12
    },
  ]
  props.sendDataToParent(productNames);
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
        <Featured text="Featured Products" />
        <div style={productStyle}>
          <FeaturedSunglass productName={productNames[0]} img={Image1} />
          <FeaturedSunglass productName={productNames[1]} img={Image2} />
          <FeaturedSunglass productName={productNames[2]} img={Image3} />
        </div>
        <div style={productStyle}>
          <FeaturedSunglass productName={productNames[3]} img={Image4} />
          <FeaturedSunglass productName={productNames[4]} img={Image5} />
          <FeaturedSunglass productName={productNames[5]} img={Image6} />
        </div>
        <Featured text="Recommended Products" />
        <div style={productStyle}>
          <FeaturedSunglass productName={productNames[6]} img={Image7} />
          <FeaturedSunglass productName={productNames[7]} img={Image8} />
          <FeaturedSunglass productName={productNames[8]} img={Image9} />
        </div>
        <div style={productStyle}>
          <FeaturedSunglass productName={productNames[9]} img={Image10} />
          <FeaturedSunglass productName={productNames[10]} img={Image11} />
          <FeaturedSunglass productName={productNames[11]} img={Image12} />
        </div>
      </div>
    </>
  )
}

export default Home;