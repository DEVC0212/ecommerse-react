import { useContext } from "react";
import SearchParticularProduct from "./SearchParticularProduct";
import AddToCart from "../Context/AddToCart";

const SearchProducts = (props) => {
  const {filteredProduct} = useContext(AddToCart);
  const divStyle = {
    maxWidth: "1300px",
    marginTop: " 100px",
    margin: "100px auto auto auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: '200vh'
  };
  return (
    <>
      <div style={divStyle}>
        {filteredProduct.map((item) => (
          <SearchParticularProduct
            key={item.id}
            name={item.name}
            style={item.style}
            img={item.image}
            price={item.price}
            // removeFromBasketButton={props.removeFromBasketButton}
            // shopDetailsHandler={props.shopDetailsHandler}
          />
        ))}
      </div>
    </>
  );
};

export default SearchProducts;
