import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllProducts from "../../Hooks/allProducts/allProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setPoducts] = AllProducts();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const saveCart = [];
    const storedCart = getStoredCart();
    console.log(storedCart);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
      setCart(saveCart);
    }
  }, [products]);
  const handleAddToCart = (selectedproduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id == selectedproduct.id);
    if (!exists) {
      selectedproduct.quantity = 1;
      newCart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedproduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, selectedproduct];
    }

    setCart(newCart);
    addToDb(selectedproduct.id);
  };
  return (
    <div className="shop-container ">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/orders")}>Review Order</button>
        </Cart>
        {console.log(cart)}
      </div>
    </div>
  );
};

export default Shop;
