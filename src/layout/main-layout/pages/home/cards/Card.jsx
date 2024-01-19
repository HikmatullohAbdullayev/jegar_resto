import "./cards.scss"
import  dataCardN  from "./data-cards.js";
import React from 'react';
import Orders from "../../../../orders/Orders.jsx";

import Img1 from "../../../../../assets/img/img_1.png"
import Img2 from "../../../../../assets/img/img_2.png"
import Img3 from "../../../../../assets/img/img_3.png"
import Img4 from "../../../../../assets/img/img_4.png"
import Img5 from "../../../../../assets/img/img_5.png"
import Img6 from "../../../../../assets/img/img_6.png"

 const imgMap = {
  1:Img1,
  2:Img2,
  3:Img3,
  4:Img4,
  5:Img5,
  6:Img6,
  7:Img1,
  8:Img2,
  9:Img3,
  10:Img4,
  11:Img5,
  12:Img6,
  13:Img4,
  14:Img5,
  15:Img6
}

 


function Card(  ) {
  return (
   <>
 <div className="card_container">
 <div className="card_top">
    <h2 className="card_title1">Choose Dishes</h2>
    <select name="type" id="type">
      <option value="type">Lag'mon</option>
      <option value="type">Manti</option>
      <option value="type">Xonim</option>
    </select>
   </div>
    <div className="card_list">
      {dataCardN.map((item) => (
        <div className="card_item" key={item.id}>
          <img className="card_img" src={imgMap[item.id]} alt="img" />
          <p className="card_title">{item.title}</p>
          <p className="card_price">{item.price}</p>
          <p className="card_text">{item.text}</p>
        </div>
      ))}
    </div>
 </div>
   </>
  );
}

export default Card;
