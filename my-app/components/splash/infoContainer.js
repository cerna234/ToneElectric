import Styles from "../splash/splash.module.scss"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
const InfoConatiner = () => {
    return(
       <main className={Styles.infoContainer}>
            <motion.div
              className={Styles.info}
              initial={{ y:"-70%",opacity:0}}
              whileInView={{ y:"0%",opacity:1 }}
              transition={{type:"ease", duration:1}}
              
            >
                
                    <p>WELCOME TO TONE ELECTRIC</p>
                    <h2>FROM CONCEPT TO <span>CREATION</span></h2>
                 
                    <Link className={Styles.button} href="/projects">View Creations</Link>
                        
                
            </motion.div>
            
       </main>
    )
}

export default InfoConatiner;