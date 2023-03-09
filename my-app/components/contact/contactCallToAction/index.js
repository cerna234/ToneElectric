
import Styles from "../../contact/contactCallToAction/contactCallToAction.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
const ContactCallToAction = () => {
    return(
        <div className={Styles.contactCallToActionContainer}>
            <div className={Styles.ContactCallToActionInner}>
                <div className={Styles.ContactCallToActionInnerOverlay}>

                    <motion.h2
                    
                        className={Styles.callToActionTitle}
                        initial={{ y:"-90%",opacity:0}}
                        whileInView={{ y:"0%",opacity:1 }}
                        transition={{type:"ease", duration:1}}

                    >READY TO GET <span className={Styles.callToActionTitleSpan}>STARTED</span>?</motion.h2>
                    <Link href="/contact" className={Styles.callToActionButton}>Contact Us</Link>
                </div>
                
            </div>
        </div>
    )
}


export default ContactCallToAction;