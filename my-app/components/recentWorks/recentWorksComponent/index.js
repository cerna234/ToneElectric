import RecentWorks from "../recentWorksData"
import RecentProjectsComponentHeader from "../recentWorksComponent/RecentProjectsComponentHeader"

import Styles from "../recentWorksComponent/recentWorksComponent.module.scss"
import CardStyles from "../../recentWorks/recentWorksCallToAction/recentWorksCallToAction.module.scss"
const RecentWorksComponents = () => {
    return (
       
    <div className={Styles.imagesContainer}>
    

    <RecentProjectsComponentHeader/>
    <div class="container-fluid overflow-hidden text-center">
        <div class="row gy-5">
            {RecentWorks.map((value,key) => {
                return(
                    <div key={key} className={`${Styles.column} col`}>
                        <div className={Styles.projectsPageProjectCard}>
                            
                        <div className={CardStyles.imageCard} key={key}>
                                    <div className={CardStyles.backgroundImageContainer}>
                                        <div style={{backgroundImage:`url(${value.img.src})`}} className={CardStyles.worksImg}>
                                        
                                        </div>
                                    </div>
                                
                                <div className={CardStyles.worksContent}>
                                    <div className={CardStyles.worksContentInner}>
                                    <p className={CardStyles.worksContentTitle}>{value.workTitle}</p>
                                    <p className={CardStyles.worksContentSubtext}>{value.workSubtext}</p>
                                    <p className={CardStyles.worksContentDescription}>{value.workDescription}</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

    </div>
        

        
    )
}


export default RecentWorksComponents;



