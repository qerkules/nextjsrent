import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("Index");
  return (
    <div className={`${styles.container}`}>
      <a className={`${styles.logoSection}`} href="/">
        <Image
          src={Logo}
          alt="rent a car in baku logo"
          className={`${styles.logo}`}
        />
      </a>

      <div className={`${styles.languageSection}`}>
        <Link className={`${styles.language}`} href="/az">
          <img
            alt="Azerbaijan"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg"
            className={`${styles.flag}`}
          />
          <span>{t("aze")}</span>
        </Link>
        <Link className={`${styles.language}`} href="/en">
          <img
            alt="United States"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            className={`${styles.flag}`}
          />
          <span>{t("eng")}</span>
        </Link>
        <Link className={`${styles.language}`} href="/ru">
          <img
            alt="Russia"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
            className={`${styles.flag}`}
          />
          <span>{t("rus")}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
