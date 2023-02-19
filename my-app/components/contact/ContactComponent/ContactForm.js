import Styles from "../ContactComponent/contact.module.scss";
import Form from "../ContactComponent/Form"

const ContactForm = () => {
    return(
        <div className={Styles.contactFormContainer}>
            <Form/>
        </div>
    )
}


export default ContactForm;