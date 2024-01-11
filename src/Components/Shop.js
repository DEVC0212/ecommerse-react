import ShopProducts from "./ShopProducts";
import Image1 from './Images/img1.png';
import Image2 from './Images/img2.png';
import Image3 from './Images/img3.png';
import Image4 from './Images/img4.png';
import Image5 from './Images/img5.png';
import Image6 from './Images/img6.png';
import Image7 from './Images/img7.png';
import Image8 from './Images/img8.png';
import Image9 from './Images/img9.png';
import Image10 from './Images/img10.png';
import Image11 from './Images/img11.png';
import Image12 from './Images/img12.png';
const Shop = (props) => {
    props.resetHandler();
    const productNames = [
        {
            name: 'Burnikk',
            style: 'Sexbomb',
            image: Image1,
            price: 67.00
        },
        {
            name: 'Kibal Batal',
            style: 'Kibal Black',
            image: Image2,
            price: 78.00
        },
        {
            name: 'Very Nice',
            style: 'Salt Maalat',
            image: Image3,
            price: 79.00
        },
        {
            name: 'Buldit',
            style: 'Salt Maalat',
            image: Image4,
            price: 80.00
        },
        {
            name: 'Balakubak',
            style: 'Betsin Maalat',
            image: Image5,
            price: 129.00
        },
        {
            name: 'Tiktilaok Manok',
            style: 'Sexbomb',
            image: Image6,
            price: 142.00
        },
        {
            name: 'Burnikk',
            style: 'Sexbomb',
            image: Image7,
            price: 170.00
        },
        {
            name: 'Kibal Batal',
            style: 'Kibal Black',
            image: Image8,
            price: 174.00
        },
        {
            name: 'Very Nice',
            style: 'Salt Maalat',
            image: Image9,
            price: 240.00
        },
        {
            name: 'Kulangot',
            style: 'Salt',
            image: Image10,
            price: 250.00
        },
        {
            name: 'Sipon Malapot',
            style: 'Salt',
            image: Image11,
            price: 250.00
        },
        {
            name: 'Pitaklan',
            style: 'Black Kibal',
            image: Image12,
            price: 674.00
        },
    ]
    const divStyle = {
        maxWidth: "1300px",
        marginTop: " 100px",
        margin: "100px auto auto auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    }
    return (
        <>
            <span style={divStyle}>
                {
                    productNames.map((item, index) => (
                        <ShopProducts key={index} img={item.image} name={item.name} style={item.style} price={item.price} />
                    ))
                }
            </span>
        </>
    )
}

export default Shop;