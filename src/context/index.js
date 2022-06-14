import React, { createContext, PureComponent } from "react";

const MyProvider = createContext();

class MyContext extends PureComponent {
  state = {
    change: false,
    cartRigster: null
  };

  handelChange = () => {
    this.setState({
      change: !this.state.change,
    });
  };


  handelSetCart = (cart) =>{
    this.setState({
      cartRigster: cart
    })
  }


  render() {

    window.load = () =>{
      window.localStorage.clear();
    }

    return (
      <MyProvider.Provider
        value={{
          change: this.state.change,
          changeFunc: this.handelChange,
          cartFunc: this.handelSetCart,
          cart: this.state.cartRigster
        }}
      >
        {this.props.children}
      </MyProvider.Provider>
    );
  }
}

export { MyContext, MyProvider };
