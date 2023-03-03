import Styles from "../AboutSection/about.module.scss"
import Image from "next/image";
import Img2 from "../../public/Images/aboutImg.png"
import Img3 from "../../public/Images/aboutpageImage.jpg"

import { AiOutlineLine } from "react-icons/ai";

const ImageComponent = () => {
    return(
        <div className={Styles.aboutSectionImageContainer}>
           
           <Image 
            src={Img3}
            className={Styles.aboutImage}
            alt="building image"
            height={200}
            width={200}
           />
            <p className={Styles.blob}></p>

    
        
           
        </div>
    )
}


export default ImageComponent;