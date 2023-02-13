import Styles from "../splash/splash.module.scss"
import InfoConatiner from "./infoContainer";

const Splash = () => {
    return (
        <div className={Styles.backgroundImageContainer}>
            <InfoConatiner></InfoConatiner>
        </div>
    )
}


export default Splash;