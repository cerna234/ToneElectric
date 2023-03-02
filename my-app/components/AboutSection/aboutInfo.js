
import Styles from "../AboutSection/about.module.scss"
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";


const AboutInfo = () => {





    return(
        <div className={Styles.aboutSectionContainer}>
                


                <div className={Styles.infoContainer}>
                    
                        <h2 className={Styles.aboutInfoTitle}>ABOUT TONE ELECTRIC</h2>
                        
                            <p className={Styles.aboutText}>
                                If you need electrical service or maintenance on your office building or industrial complex, contact locally-owned Tone Electric. Our licensed CA electricians will trace out shorts, install new lighting or run electrical lines, Circuits, Case Connections, Cooler Box Connections, Power walls, Lighting control, and more.
                            
                                Our experts are available to work with construction companies on light commercial projects and will follow the electrical engineer’s plans, install according to specs and have everything ready for the city engineers to approve the final hookup. We’ll take care of the permits and schedule the appropriate inspections.
                          

                       
                                We’ve licensed CA electricians and work in Southern CA and Mid County. Contact us today for an estimate on your commercial electrical work. To power up your savings.

                                Tone Electric has been operating for the last 20yrs locally owned.
                            </p>
                        
                       
                        <Link className={Styles.link} href="/contact">Request a Quote<span> <MdArrowForwardIos className={Styles.linkArrow} /></span></Link>
                    
                </div>
        </div>
    )
}


export default AboutInfo;