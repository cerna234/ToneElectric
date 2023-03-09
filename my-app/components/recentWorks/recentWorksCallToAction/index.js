import Styles from "../recentWorksCallToAction/recentWorksCallToAction.module.scss"
import RecentWorks from "../recentWorksData"
import Link from "next/link"
import { motion } from "framer-motion"

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
                        {RecentWorks.slice(0, 4).map((value,key) => {
                            return(
                                value.featured == true ?  <div className={Styles.imageCard} key={key}>
                                    <div className={Styles.backgroundImageContainer}>
                                        <div title={value.alt} style={{backgroundImage:`url(${value.img.src})`}} className={Styles.worksImg}>
                                        
                                        </div>
                                    </div>
                                
                                <div className={Styles.worksContent}>
                                    <div className={Styles.worksContentInner}>
                                    <p className={Styles.worksContentTitle}>{value.workTitle}</p>
                                    <p className={Styles.worksContentSubtext}>{value.workSubtext}</p>
                                    <p className={Styles.worksContentDescription}>{value.workDescription}</p>
                                    </div>
                                   
                                </div>
                            </div> : "" 
                               

                                
                            )
                        })}

                    </motion.div>
                    
               

                <Link className={Styles.RecentWorksCallToActionButton} href="/projects">View All</Link>
            </div>
        </div>

       
    )
}

export default RecentWorksCallToAction;