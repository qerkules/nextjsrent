import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.webp";
import MapImg from "../../images/map.webp";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.connectionContainer}`}>
        <div className={`${styles.contactSection}`}>
          <Image
            src={Logo}
            alt="rent a car in baku logo"
            className={`${styles.logo}`}
          />
          {/* <Link href="about-us" className={styles.pageLink}>
            About us
          </Link>

          <Link href="privacy-policy" className={styles.pageLink}>
            Privacy Policy
          </Link> */}

          <div className={`${styles.contactTitle}`}>Contact Options</div>
          <div className={`${styles.contactEmail}`}>rentacarsinbaku@gmail.com</div>
          <div className={`${styles.contactNumbers}`}>
            <p>+994105407474</p>
          </div>
        </div>
        <div className={`${styles.linksSection}`}>
          <a href="https://maps.app.goo.gl/VNPEHDwREo5ZuVk88">
            <Image
              src={MapImg}
              alt="rent a car in baku location"
              className={`${styles.mapImage}`}
            />
          </a>
        </div>
      </div>
      <div className={`${styles.disclaimer}`}>
        rentacar in baku © all rights reserved
      </div>
    </div>
  );
};

export default Footer;
