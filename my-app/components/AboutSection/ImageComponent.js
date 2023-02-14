import Styles from "../AboutSection/about.module.scss"
import Image from "next/image";
import Img1 from "../../public/Images/amzFresh.png"
import Img2 from "../../public/Images/aboutImg2.png"
const ImageComponent = () => {
    return(
        <div className={Styles.aboutSectionContainer}>
            <Image
                src={Img1}
                alt="img"
                className={Styles.aboutImageOne}
            />

            <Image
                src={Img2}
                alt="Img"
                className={Styles.aboutImageTwo}
            />
        </div>
    )
}


export default ImageComponent;