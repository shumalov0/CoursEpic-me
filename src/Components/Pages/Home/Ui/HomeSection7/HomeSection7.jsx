import React from "react";
import { Link } from "react-router-dom";
import module from './HomeSection7.module.css'
import video from '../../../../Assets/videos/v1.mp4'
const HomeSection7 = () => {
  return (
    <>
      <section className={module.HomeSection7}>
        <div className="container">
          <div className={module.Main}>
            <h2>Video təlimatı izləyin</h2>
            <div className={module.video}>
            <video controls  src={video}></video>
            </div>
            <p>
              Başlamaq işin ən çətin tərəfidir. Atdığın hər addımda sənə dəstək
              olmaq üçün burdayıq.
            </p>
            <Link to="/course">Başla</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection7;
