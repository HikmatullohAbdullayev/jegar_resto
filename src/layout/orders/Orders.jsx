import OrdersItem from "./OrdersItem";
import "./orders.scss"
import React from 'react'



function Orders(props) {
  return (
    <div className="orders">
      <div className="orders_header">
        <p className="orders_title">
        Orders #34562
        </p>
        <ul className="top_list">
          <li className="top_item">Dine In</li>
          <li className="top_item">To Go</li>
          <li className="top_item">Delivery</li>
        </ul>
        <div className="info">
          <p className="item_name">Item</p>
          <div className="numbers">
            <p className="item_name">Qty</p>
            <p className="item_name">Price</p>
          </div>
        </div>
      </div>
      <OrdersItem/>

      <div className="orders_button">
        <div className="orders_discount">
         <div className="orders_flex">
         <p className="discoun_title">Discount</p>
          <p className="discoun_price">$ 0</p>
         </div>
        </div>
        <div className="orders_discount">
          <div className="orders_flex">
          <p className="discoun_title">Sub total</p>
          <p className="discoun_price"> $ 21,03</p>
          </div>
        <button className="order_btn"> Continue to Payment</button>
        </div>
      </div>

      

    </div>
  );
}

export default Orders;