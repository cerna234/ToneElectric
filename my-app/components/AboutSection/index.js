import Styles from "../AboutSection/about.module.scss"
import ImageComponent from "./ImageComponent";
import AboutInfo from "./aboutInfo";

const AboutSection = () => {
    return(
        <div className={Styles.AboutContainer}>
            <div className={Styles.innerContainer}>
                <AboutInfo/>
                <ImageComponent/>
                
             
            </div>
        </div>
    )
}

export default AboutSection;