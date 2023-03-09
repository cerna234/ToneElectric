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
                    <h2>WELCOME TO TONE ELECTRIC</h2>
                    <p>Interested?</p>
                    <p>Fill the form and we&apos;ll be in touch</p>
                </motion.div>
            </div>
           

        </div>
    )
}

export default ContactHeader;