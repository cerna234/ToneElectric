import Styles from "../ContactComponent/contact.module.scss";
import mapImage from "../../../public/Images/RecentWorksImages/map.jpeg"
import Image from "next/image";
import React from 'react';
import { useForm,ValidationError } from "@formspree/react";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";


 

const Form = () => {
    const [state, handleSubmit] = useForm("xqkoqpba");

    if (state.succeeded) {
      return (
        <div className={Styles.succeededContainer}>
            <div className={Styles.succeededMessage}>
                <BsCheck2Circle className={Styles.succesIcon}/>
                <p className={Styles.succeededTitle}>Thank you!</p>
                <p className={Styles.succeededSubtext}>The form was submitted succesfully</p>
                <Link className={Styles.succeededButton} href="/">Back to home</Link>
            </div>
        </div>
      );
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