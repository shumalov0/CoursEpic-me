import React from "react";
import module from "./HomeSection5.module.css";
import star from "../../../../Assets/Svg/Star.svg";
import user from "../../../../Assets/Svg/User.svg";
import cardimg from "../../../../Assets/picture/cardImg.png";
import { Link } from "react-router-dom";

const CourseCard = () => {              
 

  

  return (

    <>
      <div className={module.Card}>
        <Link to='/course/:id'>
        <div className={module.CardImage}>
          <img src={cardimg} alt="cardimg" />
        </div>
        <div className={module.CardDetail}>
          <div className={module.cardBox1}>
            <div className={module.category}>
              <span>Developments</span>
              <span>Rufan Allahverdiyev</span>
            </div>
            <div className={module.CardName}>
              Premiere Pro CC for Beginners: Video Editing in Premiere
            </div>
          </div>
          <div className={module.cardBox2}>
            <div className={module.star}>
              <img src={star} alt="Star" />
              <span>4.9</span>
            </div>
            <div className={module.users}>
              <img src={user} alt="User" />
              <p>982,941</p>
              <span> students</span>
            </div>
          </div>
          <div className={module.price}>
            <h2>24.00 ₼ </h2>
          </div>
        </div>
        </Link>
        <div className={module.CardHover}>
          <div className={module.category}>
              Developments
          </div>
          <div className={module.Name}>

          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
