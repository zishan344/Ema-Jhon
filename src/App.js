import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import Login from "./component/Login/Login";
import Orders from "./component/Orders/Orders";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Shipment from "./component/Shipment/Shipment";
import Shop from "./component/Shop/Shop";
import SignUp from "./component/SignUp/SignUp";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>
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
