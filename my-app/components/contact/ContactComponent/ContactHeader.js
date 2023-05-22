import Styles from "../ContactComponent/contact.module.scss"
import { motion } from "framer-motion";
const ContactHeader = () => {
    return(
        <div className={Styles.contactHeaderComponent}>
            <div className={Styles.contactHeaderOverlay}>
                <motion.div
                
                className={Styles.headerInfo}
                initial={{y:"-40%",opacity:0}}
                whileInView={{ y:"0%",opacity:1 }}
                transition={{type:"ease", duration:1}}
                
                >
                    <h2 className={Styles.contactHeaderTitle}>WELCOME TO Vertext Architects</h2>
                    <p className={Styles.contactHeaderSubtext}>Interested?</p>
                    <p className={Styles.contactHeaderSubtext}>Fill the form and we&apos;ll be in touch</p>
                </motion.div>
            </div>
           

        </div>
    )
}

export default ContactHeader;