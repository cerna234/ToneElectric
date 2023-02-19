import Styles from "../AboutSection/about.module.scss"
import Image from "next/image";
import Img1 from "../../public/Images/amzFresh.png"
import Img2 from "../../public/Images/aboutImg.png"
const ImageComponent = () => {
    return(
        <div className={Styles.aboutSectionContainer}>
           <Image 
            src={Img2}
            className={Styles.aboutImage}
            alt="building image"
           />
        </div>
    )
}


export default ImageComponent;