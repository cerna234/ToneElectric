import Styles from "../ContactComponent/contact.module.scss";
import mapImage from "../../../public/Images/mapImage.png"
import Image from "next/image";
import React from 'react';
import { useForm,ValidationError } from "@formspree/react";


 

const Form = () => {
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");

    if (state.succeeded) {
      return <p>Thanks for your submission!</p>;
    }
    
    return(
        <div className={Styles.formContainer}>
            <div className={Styles.formInputs}>
            <form className={Styles.form} onSubmit={handleSubmit}>
                
                <input id="name" type="text" name="name" placeholder="NAME"/>
                <ValidationError prefix="name" field="text" errors={state.errors} />
                <input id="email" type="email" name="email" placeholder="EMAIL"/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <input id="company" type="text" name="Company" placeholder="COMPANY" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" placeholder="Message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
                <ValidationError errors={state.errors} />
             </form>
            </div>
            <div style={{backgroundImage:`url(${mapImage.src})`}} className={Styles.mapImageContainer}>
             
            </div>
        </div>

    )
}

export default Form;