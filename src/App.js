import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import Orders from "./component/Orders/Orders";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
  //   return (
  //     // <div>
  //
  //     // </div>
  //   );
}

export default App;
