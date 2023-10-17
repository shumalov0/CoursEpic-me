import styles from "./MentorCard.module.css";
// import playIcon from "../../../../../Assets/Svg/play.svg";
import instagramLogo from "../../../../../Assets/Svg/instagram-logo.svg";
import tiktokLogo from "../../../../../Assets/Svg/tiktok-logo.svg";
import youtubeLogo from "../../../../../Assets/Svg/youtube-logo.svg";
// import VideoModal from "../VideoModal/VideoModal";
import { useState } from "react";
import { Link  } from "react-router-dom";

import teacher1 from '../../../../../Assets/picture/teacher1.jpeg'
import teacher2 from '../../../../../Assets/picture/teacher2.jpeg'
import teacher3 from '../../../../../Assets/picture/teacher3.jpeg'

    


const  MentorCard = (img) => {
    const Teachers =[


        {
            id:1,
            img:teacher1
        },
        {
            id:2,
            img:teacher2
        },
        {
            id:3,
            img:teacher3
        },
    
    
    ]
    // const [show, setShow] = useState(false);

    // const closeHandler = () => setShow(false);
    // const openHandler = () => setShow(true);
 

    return (
        <>
         
                 <div className={styles.mentorCard} >
                            <div  className={styles.thumbnail}>
                                
                            
                                    <img
                                        className={styles.thumbnailPhoto}
                                        src={img.img}
                                        alt="some of something"
                                    />
                                
                            

                            </div>
                            <div className={styles.aboutMentor}>
                                <div className={styles.info}>
                                    <h5>Ad Soyad</h5>
                                    <h6>Front-End Developer</h6>
                                </div>
                                <div className={styles.socials}>
                                    <Link to="/course" div className={styles.social}>
                                        <img src={youtubeLogo} alt="social media logo" />
                                    </Link>
                                    <Link to="/course" className={styles.social}>
                                        <img src={tiktokLogo} alt="social media logo" />
                                    </Link>
                                    <Link to="/course" className={styles.social}>
                                        <img src={instagramLogo} alt="social media logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
        </>
    );
};

export default MentorCard;
