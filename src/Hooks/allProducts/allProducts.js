import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setPoducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPoducts(data));
  }, []);
  return [products, setPoducts];
};

export default AllProducts;
