import React, { useState, useEffect } from "react";
import "./cart.css"
import { connect } from "react-redux";

import CartItem from "./CartItem"

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <div className="section">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="card cart-summary">
        <h4 className="card-title">Cart Summary</h4>
        <div >
           <p>TOTAL_ITEMS: ({totalItems} items)</p> 
          <p>TOTAL_PRICE: $ {totalPrice}</p> 
        </div>
        <button className="btn btn-success checkout-btun">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
