import ShopProducts from "./ShopProducts";
// import Image1 from './Images/img1.png';
// import Image2 from './Images/img2.png';
// import Image3 from './Images/img3.png';
// import Image4 from './Images/img4.png';
// import Image5 from './Images/img5.png';
// import Image6 from './Images/img6.png';
// import Image7 from './Images/img7.png';
// import Image8 from './Images/img8.png';
// import Image9 from './Images/img9.png';
// import Image10 from './Images/img10.png';
// import Image11 from './Images/img11.png';
// import Image12 from './Images/img12.png';
const Shop = (props) => {
    const divStyle = {
        display: "inline-block",
        marginTop: "100px"
    }
    return (
        <>
            {
                props.dataSendToChild.map((item,index) => ( 
                    <div style={divStyle}>
                    <ShopProducts key={index} img={item.image} name={item.name} style={item.style} />
                    </div>
                ))
            }
        </>
    )
}

export default Shop;