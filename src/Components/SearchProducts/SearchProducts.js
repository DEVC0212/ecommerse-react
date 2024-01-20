import SearchParticularProduct from "./SearchParticularProduct";

const SearchProducts = (props) => {
  const divStyle = {
    maxWidth: "1300px",
    marginTop: " 100px",
    margin: "100px auto auto auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  return (
    <>
      <div style={divStyle}>
        {props.filteredProduct.map((item) => (
          <SearchParticularProduct
            key={item.id}
            name={item.name}
            style={item.style}
            img={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default SearchProducts;
