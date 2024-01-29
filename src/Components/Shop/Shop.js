import ShopProducts from "./ShopProducts";
const Shop = (props) => {
    // props.resetHandler();
    const divStyle = {  
        maxWidth: "1300px",
        margin: "120px auto auto auto",
        display: "flex",
        flexWrap: "wrap",
    }
    return (
        <>
            <span style={divStyle}>
                {
                    props.productNames.map((item) => (
                        <ShopProducts key={item.id} id={item.id} image={item.image} name={item.name} style={item.style} price={item.price} quantity={item.quantity} />
                    ))
                }
            </span>
        </>
    )
}

export default Shop;