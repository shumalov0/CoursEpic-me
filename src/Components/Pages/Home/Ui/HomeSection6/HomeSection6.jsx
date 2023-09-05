
import React from 'react'
import module from './HomeSection6.module.css'
import MentorCard from './MentorCard/MentorCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSection6 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
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
    <section className={module.HomeSection6} >
        <div className="container">
            <div className={module.Main}>
            <h2>Müəllimlər</h2>

             <Slider {...settings}>

              <MentorCard/>
              <MentorCard/>
              <MentorCard/>
              <MentorCard/>
              <MentorCard/>
              <MentorCard/>
            </Slider>
  


            </div>


        </div>
    </section>

    </>
  )
}

export default HomeSection6