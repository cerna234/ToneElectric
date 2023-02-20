
import Styles from "../AboutSection/about.module.scss"
import Link from "next/link";


const AboutInfo = () => {





    return(
        <div className={Styles.aboutSectionContainer}>
                <div className={Styles.barContainer}>
                    <div className={Styles.bar}></div>
                </div>


                <div className={Styles.infoContainer}>
                    <div className={Styles.info}>
                        <h2 className={Styles.aboutInfoTitle}>ABOUT TONE ELECTRIC</h2>
                        <p className={Styles.aboutInfoText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a </p>
                        <Link href="/">Learn More About Our team</Link>
                    </div>
                </div>
        </div>
    )
}


export default AboutInfo;