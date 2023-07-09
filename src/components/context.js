import { Component } from "react";
import { React, createContext } from "react";
import { aboutData, itemData, itemDetail } from "../data";

const DataContext = createContext();

class ProductProvider extends Component {
  state = {
    productData: [],
    productDetail: itemDetail,
    cart: [],
    aboutdata: aboutData,
    modelOpen: false,
    modelProduct: itemDetail,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProductData();
  }
  setProductData = () => {
    let tempProducts = [];
    itemData.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { productData: tempProducts };
    });
  };
  getItemById = (id) => {
    const product = this.state.productData.find((item) => item.id === id);
    return product;
  };
  handelDetail = (id) => {
    const product = this.getItemById(id);
    this.setState(() => {
      return { productDetail: product };
    });
  };
  addToCart = (id) => {
    const tempProductList = [...this.state.productData];
    const index = tempProductList.indexOf(this.getItemById(id));
    const product = tempProductList[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          productData: tempProductList,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModel = (id) => {
    const product = this.getItemById(id);
    this.setState(() => {
      return { modelProduct: product, modelOpen: true };
    });
  };

  closeModel = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };
  increamentCart = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decreamentCart = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if (product.count === 1) {
      return;
    } else {
      product.count = product.count - 1;
      product.total = product.count * product.price;
    }

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  deleteItem = (id) => {
    let tempProducts = [...this.state.productData];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItemById(id));
    let removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          productData: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProductData();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increamentCart: this.increamentCart,
          decreamentCart: this.decreamentCart,
          deleteItem: this.deleteItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const ProductConsumer = DataContext.Consumer;
export { ProductProvider, ProductConsumer };
