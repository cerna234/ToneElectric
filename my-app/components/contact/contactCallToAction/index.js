
import Styles from "../../contact/contactCallToAction/contactCallToAction.module.scss";
import Link from "next/link";
const ContactCallToAction = () => {
    return(
        <div className={Styles.contactCallToActionContainer}>
            <div className={Styles.ContactCallToActionInner}>
                <div className={Styles.ContactCallToActionInnerOverlay}>

                    <h2 className={Styles.callToActionTitle}>READY TO GET <span className={Styles.callToActionTitleSpan}>STARTED</span>?</h2>
                    <Link href="/contact" className={Styles.callToActionButton}>Contact Us</Link>
                </div>
                
            </div>
        </div>
    )
}


export default ContactCallToAction;