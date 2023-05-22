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
                
                    <p>WELCOME TO VERTEX ARCHITECTS</p>
                    <h2 className={Styles.SplashTitle}>Step into a world where design  <span>comes alive</span></h2>
                 
                    <Link className={Styles.button} href="/contact">Learn more</Link>
                        
                
            </motion.div>
            
       </main>
    )
}

export default InfoConatiner;