import Styles from "../AboutSection/about.module.scss"


const AboutInfo = () => {





    return(
        <div className={Styles.aboutSectionContainer}>
            <div>
               <h2 className={Styles.aboutTitle}>ABOUT TONE ELECTRIC</h2>
            </div>
            <div className={Styles.paragraphSection}>
                <div className={Styles.bar}></div>
                <p className={Styles.aboutParagraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a </p>
            </div>
            <div>
            LEARN MORE ABOUT  OUR TEAM 
            </div>
        </div>
    )
}


export default AboutInfo;