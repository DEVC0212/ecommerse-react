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
                        <ShopProducts key={item.id} id={item.id} image={item.image} name={item.name} style={item.style} price={item.price} quantity={item.quantity} addToCartHandler={props.addToCartHandler} removeFromCartHandler={props.removeFromCartHandler} removeFromBasketButton={props.removeFromBasketButton} shopDetailsHandler={props.shopDetailsHandler} />
                    ))
                }
            </span>
        </>
    )
}

export default Shop;