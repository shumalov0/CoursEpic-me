import React from "react";
import module from "./HomeSection3.module.css";
import Static1 from "../../../../Assets/Svg/static1.svg";
import Static2 from "../../../../Assets/Svg/static2.svg";
import Static3 from "../../../../Assets/Svg/static3.svg";
import Static4 from "../../../../Assets/Svg/static4.svg";
import Static5 from "../../../../Assets/Svg/static5.svg";
import CountUp from "react-countup";
const Company = [
  {
    id: 1,
    img: Static1,
    title: "Graduated",
    number: 67.1,
    numicon: "K",
  },
  {
    id: 2,
    img: Static2,
    title: "Partners",
    number: 26,
    numicon: "K",
  },
  {
    id: 3,
    img: Static3,
    title: "Teachers",
    number: 72,
    numicon: "",
  },
  {
    id: 4,
    img: Static4,
    title: "Success Rate",
    number: 99.99,
    numicon: "%",
  },
  {
    id: 5,
    img: Static5,
    title: "Courses",
    number: 57,
    numicon: "",
  },
];
const HomeSection3 = () => {
  return (
    <>
      <section className={module.HomeSection3}>
        <div className="container">
          <div className={module.Main}>
            {Company.map((item) => (
              <div className={module.Card}>
                <div className={module.icon}>
                  <img src={item.img} alt="CardImg" />
                </div>
                <div className={module.right}>
                  <div className={module.number}>
                    <h1> <CountUp enableScrollSpy duration={2} end={item.number} /></h1>
                    <span>
                       {item.numicon}
                    </span>
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection3;
