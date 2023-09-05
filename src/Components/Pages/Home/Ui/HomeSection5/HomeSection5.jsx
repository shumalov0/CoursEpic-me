import React from "react";
import module from "../HomeSection5/HomeSection5.module.css";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const HomeSection5 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <section className={module.HomeSection5}>
        <div className="container">
          <div className={module.courseList}>
          <Slider {...settings}>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </Slider>
          </div>
          <div className={module.More}>
            <Link to='/course' >More</Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomeSection5;
