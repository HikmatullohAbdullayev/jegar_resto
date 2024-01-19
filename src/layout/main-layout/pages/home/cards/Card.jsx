import "./cards.scss"
import  dataCardN  from "./data-cards.js";
import React from 'react';

import Img1 from "../../../../../assets/img/img_1.png"
import Img2 from "../../../../../assets/img/img_2.png"
import Img3 from "../../../../../assets/img/img_3.png"
import Img4 from "../../../../../assets/img/img_4.png"
import Img5 from "../../../../../assets/img/img_5.png"
import Img6 from "../../../../../assets/img/img_6.png"

//buni ChatGpt qildi, men har bitiga alohida if else yozgan edim :), =)
const imgMap = {
  1:Img1,
  2:Img2,
  3:Img3,
  4:Img4,
  5:Img5,
  6:Img6
}
  


function Card(props) {
  return (
    <div>
      {dataCardN.map((item) => (
        <div className="card_item" key={item.id}>
          <img className="card_img" src={imgMap[item.id]} alt="img" />
          <p className="card_title">{item.title}</p>
          <p className="card_price">{item.price}</p>
          <p className="card_text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
