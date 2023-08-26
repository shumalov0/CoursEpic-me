import React from "react";
import module from "../HomeSection2/HomeSection2.module.css";
import Layer1 from "../../../../Assets/picture/Layer1.svg";
import Layer2 from "../../../../Assets/picture/Layer2.svg";
import Layer3 from "../../../../Assets/picture/Layer3.svg";

const HomeSection2 = () => {
  const cardItem = [
    {
      id: 1,
      img: Layer1,
      title: "Gələcəyinə yatırım edirik.",
      detail:
        "Peşəkar müəllimlərimizin dəstəyi ilə karyeranın ilk günündən sürətli öyrənərək, inkişaf edəcəksən.",
    },
    {
      id: 2,
      img: Layer2,
      title: "Daha yaxşısı mümkündür.",
      detail:
        "Bizimlə hədəflərinə doğru şəkildə addımlayacaqsan. Keçmişini sıfırla və sənə kömək etməyimizə icazə ver.",
    },
    {
      id: 3,
      img: Layer3,
      title: "Mümkün olacağına inan!",
      detail:
        "Öz potensialını bizimlə kəşf etməyini istəyirik. Bacaracağına inanırıq!",
    },
  ];

  return (
    <>
      <section className={module.HomeSection2}>
        <div className="container">
          <div className={module.mainTwo}>
            {cardItem.map((item) => (
              <div className={module.Card}>
                <div className={module.ImgBox}>
                  <img src={item.img} alt="Layer" />
                </div>
                <h2>{item.title}</h2>
                <p>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection2;
