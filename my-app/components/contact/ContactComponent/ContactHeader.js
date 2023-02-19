import Styles from "../ContactComponent/contact.module.scss"

const ContactHeader = () => {
    return(
        <div className={Styles.contactHeaderComponent}>
            <div className={Styles.headerInfo}>
                <h2>WELCOME TO TONE ELECTRIC</h2>
                <p>Interested?</p>
                <p>Fill the form and we'll be in touch</p>
            </div>

        </div>
    )
}

export default ContactHeader;