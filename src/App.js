import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import ProductsList from "./components/productsList";
import About from "./components/about";
import Default from "./components/default";
import Cart from "./components/cart/cart";
import ItemDetails from "./components/itemDetails";
import Model from "./components/model";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/itemDetails" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Model />
      </>
    );
  }
}

export default App;
