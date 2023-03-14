import Styles from "../recentWorksComponent/recentWorksHeader.module.scss"
import { motion } from "framer-motion"
const RecentProjectsComponentHeader = () => {
    return(
        <div className={Styles.headerContainer}>
            <motion.div
            
            className={Styles.headerInnerContainer}
            initial={{y:"-40%"}}
            whileInView={{ y:"0%",opacity:1 }}
            transition={{type:"ease", duration:1}}
            onvi
            
            >
                <h2>Recent Projects</h2>
                <p>Tone Electric has been operating for the last 20yrs locally owned. Contact us today for an estimate on your commercial electrical work.</p>
            </motion.div>
        </div>
    )
}

export default RecentProjectsComponentHeader;