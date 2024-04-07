import React from "react";
import styles from "./styles.module.css";
import Hyundai from "../../images/logos/hyundai.png";
import Toyota from "../../images/logos/toyota.png";
import Mercedes from "../../images/logos/mercedes.png";
import Kia from "../../images/logos/kia.png";
import Bmw from "../../images/logos/bmw.png";
import Image from "next/image";

const BrandBanner = () => {
  return (
    <div className={`${styles.container}`}>
      <Image
        src={Mercedes}
        alt="mercedes"
        className={`${styles.image} ${styles.margin}`}
      />
      <Image
        src={Hyundai}
        alt="hyundai"
        className={`${styles.image} ${styles.margin}`}
      />
      <Image
        src={Toyota}
        alt="toyota"
        className={`${styles.image} ${styles.margin}`}
      />
      <Image
        src={Kia}
        alt="kia"
        className={`${styles.image} ${styles.margin}`}
      />
      <Image src={Bmw} alt="bmw" className={`${styles.image}`} />
    </div>
  );
};

export default BrandBanner;
