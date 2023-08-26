import React from "react";
import module from "./HomeSection4.module.css";
import ImgOne from "../../../../Assets/picture/img1.png";
import ImgTwo from "../../../../Assets/picture/img2.png";
const HomeSection = () => {
  return (
    <>
      <section className={module.HomeSection4}>
        <div className="container">
          <div className={module.bottomBox}>
            <div className={module.bottomLeftBox}>
              <div className={module.twoImgBox}>
                <img src={ImgTwo} alt="Img" />
                <img src={ImgOne} alt="Img" />
              </div>
            </div>
            <div className={module.bottomRightBox}>
              <div className={module.textBox}>
                <h1>Our Mission</h1>
                <p>
                  Bizim vəzifəmiz güvən yaratmaqdır. İnsan mərkəzli təhsil üçün
                  əlimizdən gələnin ən yaxşısını edirik.
                </p>
              </div>
              <div className={module.textBox}>
                <h1>Our Vision</h1>
                <p>
                Sənin nələrə ehtiyacının olduğunu bilirik. Rahat öyrənmə təcrübəsi yaşamağın üçün platformamızı hər gün daha da asanlaşdırmağa çalışırıq.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
