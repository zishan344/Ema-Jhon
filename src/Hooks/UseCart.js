import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedCart = products.find((p) => p._id === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        savedCart.push(addedCart);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
