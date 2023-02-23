import Styles from "../recentWorksCallToAction/recentWorksCallToAction.module.scss"
import RecentWorks from "../recentWorksData"
import Link from "next/link"

const RecentWorksCallToAction = () => {
    return(
        <div className = {Styles.RecentWorksCallToActionContainer}>
            <p className={Styles.companyName}>TONE <span className={Styles.companyNameSpan}>ELECTRIC</span></p>

            <div className={Styles.innerContainer}>
                <p className={Styles.RecentWorksTitle}>RECENT WORKS</p>
                <p className={Styles.RecentWorksSubtext}>featured projects</p>
                
                    <div className={Styles.RecentWorksContainer}>
                        {RecentWorks.map((value,key) => {
                            return(
                                value.featured == true ?  <div className={Styles.imageCard} key={key}>
                                <div style={{backgroundImage:`url(${value.img.src})`}} className={Styles.worksImg}>
                                    
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

                    </div>
                    
               

                <Link className={Styles.RecentWorksCallToActionButton} href="/">View All</Link>
            </div>
        </div>
    )
}

export default RecentWorksCallToAction;