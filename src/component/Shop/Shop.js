import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [products, setPoducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setPoducts(data));
  }, [page, size]);

  console.log(page);
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / 10);
        setPageCount(page);
      });
  }, []);
  const navigate = useNavigate();

  const handleAddToCart = (selectedproduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product._id == selectedproduct._id);
    if (!exists) {
      selectedproduct.quantity = 1;
      newCart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedproduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, selectedproduct];
    }

    setCart(newCart);
    addToDb(selectedproduct._id);
  };
  return (
    <>
      <div className="shop-container ">
        <div className="products-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="order-container">
          <Cart cart={cart}>
            <button onClick={() => navigate("/orders")}>Review Order</button>
          </Cart>
        </div>
      </div>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        {size}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};

export default Shop;
