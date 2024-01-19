
import "./ordersItem.scss"
import ordersData from "./orders-data.js";
import DeleteIcon from "../../assets/icon/DeleteIcon.jsx"

function OrdersItem(props) {
  return (
    <ul className="orders_list">
      {ordersData.map((item) => (
        <li className="orders_item" key={item.id}>
          <div className="item_top">
            <div className="orders_content">
              <img className="item_img" src={item.img} alt="img" />
              <div className="orders_names">
                <h2 className="item_title">{item.title}</h2>
                <p className="item_price">{item.price}</p>
              </div>
            </div>
              <div className="itemtotal__box">
                <p className="item_count">{item.numbers}</p>
                <p className="item_total_price">{item.totalPrice}</p>
              </div>
          </div>
            <div className="item_bottom">
                <input className="item_input" placeholder={item.text} type="text" name="text" id="text" />
                <button className="item_button"><DeleteIcon/></button>
            </div>
        </li>
      ))}
    </ul>
  );
}

export default OrdersItem;
