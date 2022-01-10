import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          exact path="/home" element={<Home/>}>
        </Route>
        <Route 
          path="/products/:category" element={<ProductList/>}>
        </Route>
        <Route 
          path="/product/:id" element={<Product/>}>
        </Route>
        <Route 
          path="/cart" element={<Cart/>}>
        </Route>
        <Route 
          path="/login" element={<Login/>}>
        </Route>
        <Route 
          path="/register" element={<Register/>}>
        </Route>
      </Routes>
    </Router>
    );
};

export default App;