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
                <p>jjdb</p>
            </motion.div>
        </div>
    )
}

export default RecentProjectsComponentHeader;