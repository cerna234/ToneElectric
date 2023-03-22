import Styles from "../recentWorksCallToAction/recentWorksCallToAction.module.scss"
import RecentWorks from "../recentWorksData"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import img from "../../../public/Images/amzFresh.png"
import img2 from "../../../public/Images/Sprouts.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const RecentWorksCallToAction = () => {


    return(

 
        <div className = {Styles.RecentWorksCallToActionContainer}>
            <p className={Styles.companyName}>TONE <span className={Styles.companyNameSpan}>ELECTRIC</span></p>

            <div className={Styles.innerContainer}>
                <motion.div
                    initial={{ y:"-90%",opacity:0}}
                    whileInView={{ y:"0%",opacity:1 }}
                    transition={{type:"ease", duration:1}}
                >
                <p className={Styles.RecentWorksTitle}>RECENT WORKS</p>
                <p className={Styles.RecentWorksSubtext}>Featured projects</p>

                </motion.div>
                
                    <motion.div
                    
                        className={Styles.RecentWorksContainer}
                        initial={{ x:"-90%",opacity:0}}
                        whileInView={{ x:"0%",opacity:1 }}
                        transition={{type:"ease", duration:1}}
                    >
                        
                       
                    
                        <Carousel className={Styles.carouselContainer} showThumbs={false}>

                        {RecentWorks.map((value,key) => {
                            return(
                                <div className={`${Styles.imageContainer} carousel`} key={key}>
                                    <p>{value.workCaption}</p>
                                    <Image
                                     src={value.imageSrc}
                                     alt={value.alt}
                                    />
                                     
                                </div>
                            )
                        })}
                 

                
                  
                 
              </Carousel>

                    </motion.div>
                    
            
            </div>
        </div>

       
    )
}

export default RecentWorksCallToAction;