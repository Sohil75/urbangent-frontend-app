import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./adress.css";

export default function AdressPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const calculatedTotal=location.state?.calculatedTotal ||0;
  const handlePayment = () => {
    alert("order placed sucessfully");
    navigate("/");
  };
  return (
    <div className="addresspage">
      {/* Left Section: Address Form */}
      <div className="field1">
        <h1>Address & Payment</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Phone 000-000-0000" />
          <input placeholder="E-mail" />
          <textarea placeholder="Shipping Address" />
          <textarea placeholder="Shipping State" />
        </form>

        {/* Payment Method */}
        <div className="payment">
          <h3>Payment Method:</h3>
          <select required className="selectPayment">
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="net-banking">Net Banking</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>

        <button type="button" onClick={handlePayment} className="placeOrder">
          Place Order
        </button>
      </div>

      {/* Right Section: Price Details */}
      <div className="price-details-sections ">
        <h4>Price Details</h4>
        <div className="price-rows">
          <span>Total MRP (Inc. of Taxes)</span>
          {/* {calculatedTotal()} */}
          <span>₹ {calculatedTotal}</span>
        </div>
        <div className="price-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="price-row totals">
          <span>Order Total</span>
          
          <span>₹{calculatedTotal} </span>
        </div>
      </div>
    </div>
  );
}
