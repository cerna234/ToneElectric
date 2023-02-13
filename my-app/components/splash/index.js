import Styles from "../splash/splash.module.css"
import InfoConatiner from "./infoContainer";

const Splash = () => {
    return (
        <div className={Styles.backgroundImageContainer}>
            <InfoConatiner></InfoConatiner>
        </div>
    )
}


export default Splash;