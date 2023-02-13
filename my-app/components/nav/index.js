import * as React from "react";
import Link from "next/link";
import NavStyles from "../nav/nav.module.scss"


const Nav = () => {
    return (
    <nav className={NavStyles.navContainer}>
      <div>
        <h2>LOGO</h2>
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