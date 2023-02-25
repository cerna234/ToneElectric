import Styles from "../AboutSection/about.module.scss"
import Image from "next/image";
import Img2 from "../../public/Images/aboutImg.png"
const ImageComponent = () => {
    return(
        <div  className={Styles.aboutSectionImageContainer}>
           <Image 
            src={Img2}
            className={Styles.aboutImage}
            alt="building image"
            height={200}
            width={200}
           />
        </div>
    )
}


export default ImageComponent;