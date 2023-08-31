import React from "react";
import module from "./Footer.module.css";
import logo from "../../Assets/Svg/logowhite.svg";
import { Link } from "react-router-dom";
import Instagram from '../../Assets/Svg/🦆 icon _instagram_.svg'
import Linkledin from '../../Assets/Svg/LinkedinLogo.svg'
import Tiktok from '../../Assets/Svg/🦆 icon _tiktok_.svg'
const Footer = () => {
  return (
    <>
    
      <footer className={module.bg}>
        <div className={module.Footer}>
        <div className="container">
          <div className={module.Main}>
            <Link to='/' className={module.Logo}>
              <img src={logo} alt="Logo" />
            </Link>
            <div className={module.main}>
              <div className={module.top}>
              <div className={module.list}>
                <Link to='/about' >About</Link>
                <Link to='/fetures'>Features</Link>
                <Link to='/pricing' >Pricing</Link>
              </div>
              <div className={module.list}>
                <Link to='/careers' >Careers</Link>
                <Link to='/categories'>Categories</Link>
                <Link to='/course'>Course</Link>
              </div>
              <div className={module.list}>
                <Link to='/facetoface' >Facetoface</Link>
                <Link to='/bonus' >Bonus</Link>
              </div>
              <div className={module.list}>
                <Link to='/help'>Help</Link>
                <Link to='/privacypolicy'>Privacy Policy</Link>
              </div>
              </div>
            </div>
            <div className={module.Right}>
              <div className={module.Social}>
                  <a href='https://www.tiktok.com/@coursepic.com?is_from_webapp=1&sender_device=pc'>
                     <img src={Tiktok} alt="tiktok" />
                  </a>
                  <a href='https://www.instagram.com/coursepic/'>
                     <img src={Instagram} alt="instagram" />
                  </a>
                  <a href='https://www.linkedin.com/company/coursepic/'>
                     <img src={Linkledin} alt="Linkedin" />
                  </a>
              </div>
              <div className={module.input}>
                <form className={module.FormBox} >
                <input type="text"  placeholder="Subscribe to our Newsletter"/>
                <button>Subscribe</button>
                </form>

              </div>
            </div>
          </div>
          
          <div className={module.Bottom}>
                <p>© 2023 Coursepic  All rights reserved</p>
              </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
