import React from "react";
import styles from "./styles.module.css";
import CamryImg from "../../images/camry-header.webp";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const t = useTranslations("Index");
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.headerSection}`}>
        <div className={`${styles.leftSide}`}>
          <h1 className={`${styles.title}`}>{t("headerTitle")}</h1>
          <p className={`${styles.subTitle}`}>{t("headerSubTitle")}</p>
        </div>
        <div className={`${styles.rightSide}`}>
          <Image
            className={`${styles.image}`}
            src={CamryImg}
            alt="rent a car in baku header"
            loading="eager"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={`${styles.buttonSection}`}>
        <Link className={`${styles.lookCarsBtn}`} href={"#available-cars"}>
          <span>{t("headerButton")}</span>{" "}
          <FaAngleDoubleDown className={`${styles.icon}`} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
