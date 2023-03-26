import Styles from "../Footer/footer.module.scss"
import Image from "next/image";
import Logo from "../../public/Images/ToneElectricLogo.png"
const Footer = () => {
    return(
        <div className={Styles.footerContainer}>
            <div className={Styles.footerTopHalf}>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        <div className={Styles.titleSection}>
                            <Image
                                src={Logo}
                                height={100}
                                width={130}
                                className={Styles.footerLogo}
                                alt="logo of Tone Electric"
                            /> 
                        </div>
                        
                        <div className={Styles.info}>
                            <p className={Styles.logoSectionText}>TONE ELECTRIC</p>
                            <p className={Styles.logoSectionText}>since 1988</p>
                        </div>
                    </div>
                    
                    

                </div>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        <div className={Styles.titleSection}>
                            <h2>OFFICE</h2>
                        </div>
                        <div className={Styles.info}>
                            <p>Tone Electric
                                20793 E Valley Blvd Unit B
                                Walnut, CA 91789
                            </p>
                            <p>Fax: (909) 594-8460</p>
                        </div>
                    </div>
                    
                </div>
                <div className={Styles.footerSection}>
                    <div className={Styles.footerSectionInner}>
                        <div className={Styles.titleSection}>
                            <h2>CONTACT</h2>
                        </div>
                        <div className={Styles.info}>
                            <p>TEL: (909) 594-8460</p>
                            <p>Email: info@tonelectric.com</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={Styles.footerBottomhalf}>
                <p><small>&copy; Copyright 2023, Tone Electric</small></p>
            </div>
            
        </div>
    )
}


export default Footer;