import React, { useState } from "react";
import { connect } from "react-redux";
import { Adjust,RemoveFromCart } from "../../redux/Actions";

const CartItem = ({ item, Adjust, RemoveFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    Adjust(item._id, e.target.value);
  };

  return ( 
    <div class="card card-b">
  <img class="card-img-top" src={item.image}
        alt={item.title} />
  <div class="card-body">
      <h5 className= "card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text"><strong>${item.price}</strong></p>
        <label htmlFor="qty" className="card-text">Qty  </label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            className="qty-box"
            onChange={onChangeHandler}
          />
     <button className="btn btn-danger remove-btun"
          onClick={() => RemoveFromCart(item._id)}
        >Remove
        </button>
  </div>
</div>

  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    Adjust: (id,qty) => dispatch(Adjust(id,qty)),
    RemoveFromCart: (id) => dispatch(RemoveFromCart(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
