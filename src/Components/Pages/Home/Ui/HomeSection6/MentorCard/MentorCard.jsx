import styles from "./MentorCard.module.css";
// import playIcon from "../../../../../Assets/Svg/play.svg";
import instagramLogo from "../../../../../Assets/Svg/instagram-logo.svg";
import tiktokLogo from "../../../../../Assets/Svg/tiktok-logo.svg";
import youtubeLogo from "../../../../../Assets/Svg/youtube-logo.svg";
// import VideoModal from "../VideoModal/VideoModal";
import { useState } from "react";
import { Link  } from "react-router-dom";

const DUMMY_IMAGE =
    "https://fastly.picsum.photos/id/630/600/800.jpg?hmac=P4lxgGrWr1s5GjIRuFW7HskbXTeRAIepLa1CkVXTEB4";

    
const  MentorCard = () => {
    // const [show, setShow] = useState(false);

    // const closeHandler = () => setShow(false);
    // const openHandler = () => setShow(true);

    return (
        <>
            {/* <VideoModal show={show} closeHandler={closeHandler} /> */}
            <div className={styles.mentorCard}>
                <div  className={styles.thumbnail}>
                    <img
                        className={styles.thumbnailPhoto}
                        src={DUMMY_IMAGE}
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
