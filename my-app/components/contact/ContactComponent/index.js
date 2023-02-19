import Styles from "../ContactComponent/contact.module.scss"
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactComponent = () => {
    return(
        <div >
            <ContactHeader/>
            <ContactForm/>
        </div>
    )
}

export default ContactComponent;