import React from "react";
import module from "../HomeSection1/HomeSection1.module.css";
import { Link } from "react-router-dom";
import Img from '../../../../Assets/picture/main.png'
const HomeSection1 = () => {
  return (
    <>
      <section className={module.HomeSection1}>
        <div className="container">
          <div className={module.main}>
            <div className={module.left}>
              <p>
                Bu günə kimi bizi sevib, ayrılan görmədik. Bizi sevsən, sən də
                ayrılmaq istəməyəcəksən.
              </p>
              <span>
                Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını
                qarşılayırıq.
              </span>
              <Link to="/course">Başla</Link>
            </div>
            <div className={module.right}>
                <div className={module.Image}>
                    <img src={Img} alt="MainPng" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection1;
