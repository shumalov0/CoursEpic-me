
import React from 'react'
import module from '../HomeSection5/HomeSection5.module.css'
import Slider from "react-slick";
import CourseCard from './CourseCard';
const HomeSection5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className={module.HomeSection5}>
          <div className="container">
           <Slider {...settings} >
               <CourseCard/>
           </Slider> 
          </div>
      </section>
    </>
  )
}

export default HomeSection5