import * as React from "react";
import Link from "next/link";
import Styles from "../nav/nav.module.scss"
import Image from "next/image";
import Logo from "../../public/Images/ToneElectricLogo.png"
import { AiOutlineAlignRight } from "react-icons/ai";



const NavBar = () => {




    return (
      <nav className=  {`${Styles.navOverride} navbar navbar-expand-lg navbar-light bg-light `}>
  <Link className={Styles.logoLink} href="/">
     <Image
      src={Logo}
      height={60}
      alt="logo"
      className={Styles.logo}
     

     />
    </Link>
  <button className={`${Styles.hamburgerIconContainer}  navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className={Styles.hamburgerIcon}><AiOutlineAlignRight/></span>
  </button>

  <div className={`${Styles.navLinkDesktop} collapse navbar-collapse`} id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      
      <li className={`nav-item `}>
        <Link className={`${Styles.links} ` }  href="/">Home</Link>
      </li>
      
      <li className={`nav-item`}>
        <Link className={`${Styles.links} `} href="/contact">Contact</Link>
      </li>

    
    </ul>
    
  </div>
</nav>

      );
    };

export default NavBar;