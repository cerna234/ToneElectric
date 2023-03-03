import Styles from "../splash/splash.module.scss"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const InfoConatiner = () => {
    return(
       <main className={Styles.infoContainer}>
            <div className={Styles.info}>
                
                    <p>WELCOME TO TONE ELECTRIC</p>
                    <h2>FROM CONCEPT TO <span>CREATION</span></h2>
                 
                    <Link className={Styles.button} href="/about">Learn More</Link>
                        
                
            </div>
            
       </main>
    )
}

export default InfoConatiner;