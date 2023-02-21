import Styles from "../ImageStrip/imageStrip.module.scss";
import ImageStripImages from "./imageData";
import Image from "next/image";
import img2 from "../../public/Images/aboutImg2.png";
const ImageStrip = () => {
    return(
        <div className={Styles.imageStripContainer}>
            
            {ImageStripImages.map((value,key) => {
                return(
                   
                  
                   
                    <Image
                        key={key}
                        src={value.imageSrc}
                        alt="ALT"
                        className={Styles.image}
                    />
                    
                    
                )
            })}
        </div>
    )
}

export default ImageStrip;