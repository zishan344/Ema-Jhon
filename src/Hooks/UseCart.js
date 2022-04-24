import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);
    fetch("http://localhost:5000/productByKeys", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (const id in storedCart) {
          const addedCart = products.find((p) => p._id === id);
          if (addedCart) {
            const quantity = storedCart[id];
            addedCart.quantity = quantity;
            savedCart.push(addedCart);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
