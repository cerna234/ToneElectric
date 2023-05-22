
import Styles from "../AboutSection/about.module.scss"
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const AboutInfo = () => {





    return(
        <div className={Styles.aboutSectionContainer}>
                


                <motion.div
                
                className={Styles.infoContainer}
                initial={{ x:"-30%",opacity:0}}
                whileInView={{ x:"0%",opacity:1 }}
                transition={{type:"ease", duration:1}}
                
                >

                        <h2 className={Styles.aboutInfoTitle}>VERTEX ARCHITECTS</h2>
                        
                            <p className={Styles.aboutText}>
                               
Vertex Architects is a leading architecture company dedicated to crafting exceptional design solutions. With a passion for innovation and a commitment to excellence, we specialize in creating inspiring and functional spaces that elevate the human experience. Our team of talented architects combines creative vision with technical expertise to deliver projects that surpass client expectations. From residential and commercial buildings to urban planning and interior design, Vertex Architects strives to shape a built environment that harmonizes aesthetics, sustainability, and functionality. With a focus on collaboration and a deep understanding of client needs, we transform ideas into reality, building a legacy of timeless architecture
                            </p>
                        
                       
                        <Link className={Styles.link} href="/contact">Request Quote<span> <MdArrowForwardIos className={Styles.linkArrow} /></span></Link>
                    
                </motion.div>
        </div>
    )
}


export default AboutInfo;