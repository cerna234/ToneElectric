import * as React from "react";
import Link from "next/link";
import Styles from "../nav/nav.module.scss"
import Image from "next/image";
import Logo from "../../public/Images/logo.png"



const NavBar = () => {
    return (
      <nav className=  {`${Styles.navOverride} navbar navbar-expand-lg navbar-light bg-light `}>
  <Link href="/">
     <Image
      src={Logo}
      height={60}
      alt="logo"
     

     />
    </Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      
      <li className={`nav-item`}>
        <Link className={`${Styles.links} nav-link`} href="/">Home</Link>
      </li>
      
      <li className={`nav-item`}>
        <Link className={`${Styles.links} nav-link`} href="/contact">Contact</Link>
      </li>

      <li className={`nav-item`}>
        <Link className={`${Styles.links} nav-link`} href="/">Projects</Link>
      </li>
    </ul>
    
  </div>
</nav>

      );
    };

export default NavBar;