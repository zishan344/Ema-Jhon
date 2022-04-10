import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "../../Hooks/allProducts/allProducts";
import useCart from "../../Hooks/UseCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setPoducts] = AllProducts();
  const [cart, setCart] = useCart(products);
  const handaleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((p) => (
          <ReviewItem
            key={p.id}
            handaleRemoveProduct={handaleRemoveProduct}
            product={p}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>Proceed Shipment</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
