import React, { useEffect, useRef } from "react";
import Buttonn from "./ToggleButton";
import module from "./Header.module.css";
import Logo from "../../Assets/Svg/coursEpicLogo.svg";
import bottom from "../../Assets/Svg/bottom.svg";
import top from "../../Assets/Svg/top.svg";
import { Link } from "react-router-dom";
import earth from "../../Assets/Svg/earth.svg";
import { useState } from "react";
import {FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";



const Header = () => {

  const toggleMenu = () => {
    setOpenButton(!closeButton);
    if (!closeButton) {
      <FaBars/>
      document.body.style.overflow = 'hidden';
    } else {
      <GrClose/>
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(()=>{
 

    let handler = (event)=>{
      if(event.target !== langRef.current  ){
        setLanguageButton(false)
      }
    }

    


    document.addEventListener('mousedown',handler)



  
  })
  const [closeButton ,setOpenButton]= useState(false)
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();
  const [openPopUp, setOpenPopUp] = useState(false);
  const popupDetail = [
    {
      id: 1,
      color: "#F6F1F8",
      path: "/course",
      coursName: "Kurslar",
      coursDetail:
        "Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını qarşılayırıq.",
    },
    {
      id: 2,
      color: "#F6F1F8",
      path: "/live",
      coursName: "Canlı Yayımlar",
      coursDetail:
        "Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını qarşılayırıq.",
    },
    {
      id: 3,
      color: "#F6F1F8",
      path: "/facetoface",
      coursName: "1:1 ",
      coursDetail:
        "Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını qarşılayırıq.",
    },
    {
      id: 4,
      color: "#F6F1F8",
      path: "/digitalmarketing",
      coursName: "Digital ürünlər",
      coursDetail:
        "Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını qarşılayırıq.",
    },
    {
      id: 5,
      color: "#F6F1F8",
      path: "/folowers",
      coursName: "Abunəliklər",
      coursDetail:
        "Uğurlu olmağın üçün təhsil və şəxsi inkişaf ehtiyaclarını qarşılayırıq.",
    },
  ];
  const Language = [
    {
      id: "1",
      language: "Azərbaycan",
    },
    {
      id: "2",
      language: "English",
    },
    {
      id: "3",
      language: "Polish",
    },
    {
      id: "4",
      language: "Rusiya",
    },
  ];

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== buttonRef.current) {
      setOpenPopUp(false);
    }
  });
  // window.addEventListener("click", (e) => {
  //   if (e.target !== langRef.current && e.target !== langButtonRef.current) {
  //     setLanguageButton(false);
  //   }
  // });

  const [langButton, setLanguageButton] = useState(false);
  const langRef = useRef();
  const langButtonRef = useRef();

  return (
    <section className={module.Header}>
      <nav className={module.navBar} id={closeButton ? "relative":""} >
        <div className="container">
          <div className={`${module.NavDetail}`}>
            <div className={module.Logo}>
              <Link onClick={()=>setOpenButton(false)}  to="/">
                <img src={Logo} alt="CoursEpicLogo" />
              </Link>
            </div>
            
            <div className={module.Menu} id={closeButton ? "hidden":""} >
              <Link
                className={module.popButton}
                onClick={() => setOpenPopUp((prevtwo) => !prevtwo)}
              >
                <span ref={buttonRef} onClick={() => setOpen((prev) => !prev)}>
               
                Məhsullar
                </span>
                {!open ? (
                  <img src={top} alt="Top" />
                ) : (
                  <img src={bottom} alt="Bottom" />
                )}
              </Link>
              {!openPopUp ? (
                openPopUp
              ) : (
                <div ref={menuRef} className={module.MenuPopup}>
                  <div className={module.PopupContainer}>
                    {popupDetail.map((item, key) => (
                      <Link to={item.path} onClick={() => setOpenPopUp(false)} >
                        <div  onClick={() => setOpenButton(false)} key={key} className={module.poupMain}>
                          <h1>{item.coursName}</h1>
                          <p>{item.coursDetail}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link onClick={()=>setOpenButton(false)} to="/career"> Karyera</Link>
              <Link onClick={()=>setOpenButton(false)} to="/about"> Haqqımızda</Link>
              <Link onClick={()=>setOpenButton(false)} to="/price"> Təlimçi ol</Link>
              <div>
                <Buttonn />
              </div>
            </div>
            <div className={module.LoginSing} id={closeButton ? "hidden":""}>
              <Link onClick={()=>setOpenButton(false)} to="/login">Daxil ol</Link>
              <Link onClick={()=>setOpenButton(false)} to="/register">Qeydiyyat</Link>
            </div>
 

            <div
              ref={langButtonRef}
              onClick={() => setLanguageButton(() => !langButton)}
              className={module.Language}
       
            >
              <span>
              <img src={earth} alt="earth" />
              </span>
            </div>
            {!langButton ? (
              setLanguageButton
            ) : (
              <div ref={langRef} className={module.LanguagePopup}>
                {Language.map((item, key) => (
                  <div  key={key} className={module.popupItem}>
                    <Link  onClick={() => setLanguageButton(false)}>
                      {item.language}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <div  onClick={toggleMenu} className={module.bar} >
              
                  {!closeButton ?
                   <FaBars/>
                  :
                  <GrClose/>
                  }

                 
      
              
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
