import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fieldes">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder=" Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street " />
        <div className="multi-fieldes">
          <input type="text" placeholder="City" />
          <input type="text" placeholder=" State" />
        </div>
        <div className="multi-fieldes">
          <input type="text" placeholder="Zipcode" />
          <input type="text" placeholder=" Country" />
        </div>
        <input type="text" placeholder="Phone number" />
      </div>

      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="place-order-right">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>{" "}
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
