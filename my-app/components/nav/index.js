import * as React from "react";
import Link from "next/link";
import NavStyles from "../nav/nav.module.scss"
import Image from "next/image";
import Logo from "../../public/Images/logo.png"


const Nav = () => {
    return (
    <nav className={NavStyles.navContainer}>
      <div>
          <Image
          src={Logo}
          width={100}
          heigh={200}
          />
      </div>
      <div>
      <Link href="/">HOME</Link>
       <Link href="/contact">CONTACT</Link>
       <Link href="/projects">PROJECTS</Link>
      </div>
     
    </nav>

      );
    };

export default Nav;