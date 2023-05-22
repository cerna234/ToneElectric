import Styles from "../Footer/footer.module.scss"
import Image from "next/image";
import Logo from "../../public/Images/ToneElectricLogo.png"
const Footer = () => {
    return(
        <div className={Styles.footerContainer}>
            <div className={Styles.footerTopHalf}>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        
                        
                        <div className={Styles.info}>
                            <p style={{fontSize:"30px",color:"white"}}> <span style={{color:"rgba(0, 255, 255, 1)"}}>VERTEX</span> ARCHITECTS</p>
                            <p className={Styles.logoSectionText}>since 1988</p>
                        </div>
                    </div>
                    
                    

                </div>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        <div className={Styles.titleSection}>
                            <h2 className={Styles.footerSectionTitle}>OFFICE</h2>
                        </div>
                        <div className={Styles.info}>
                            <p>Vertex Architects
                                28493 E Valley Blvd Unit 12 
                                Winchester
                            </p>
                            <p>Fax: (819) 564-8944</p>
                        </div>
                    </div>
                    
                </div>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        <div className={Styles.titleSection}>
                            <h2 className={Styles.footerSectionTitle}>CONTACT</h2>
                        </div>
                        <div className={Styles.info}>
                            <p>TEL: (819) 564-8944</p>
                            <p>Email: info@VertexArchitects.com</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={Styles.footerBottomhalf}>
                <p><small>&copy; Copyright 2023, Vertex Architects</small></p>
            </div>
            
        </div>
    )
}


export default Footer;