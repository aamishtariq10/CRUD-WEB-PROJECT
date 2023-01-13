import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
//import AboutUs from "./components/AboutUs";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import ConfirmOrder from "./components/ConfirmOrder";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import NewProduct from "./components/NewProduct";
import EditProducts from "./components/EditProducts";
function App() {
  return (
    <div className=" container">
      <TopMenu />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="products/update/:id" element={<EditProducts />}></Route>
          <Route path="products/new" element={<NewProduct />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="order-summery" element={<ConfirmOrder />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
