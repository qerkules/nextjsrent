import React from "react";
import styles from "./styles.module.css";
import { BsCash } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLocalAirport } from "react-icons/md";
import SectionImg from "../../images/sectionimg.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Ourservices = () => {
  const t = useTranslations("Index");
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sectionImgContainer}`}>
        <Image
          src={SectionImg}
          alt="rent a car in baku section"
          className={`${styles.sectionImg}`}
          loading="eager"
        />
      </div>

      <div className={`${styles.detailsSection}`}>
        <div className={`${styles.whyChoose}`}>
          <p>{t("whyChoose")}</p>
        </div>
        <h2 className={`${styles.title}`}>{t("whyChooseTitle")}</h2>
        <div className={`${styles.infoSection}`}>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <BsCash />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>{t("bPriceT")}</h4>
              <p className={`${styles.infoSubtitle}`}>{t("bPriceST")}</p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <MdLocalAirport />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>{t("dToAirT")}</h4>
              <p className={`${styles.infoSubtitle}`}>{t("dToAirST")}</p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <Ri24HoursFill />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>{t("hourDeliverT")}</h4>
              <p className={`${styles.infoSubtitle}`}>{t("hourDeliverST")}</p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <IoMdPersonAdd />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>{t("expDriverT")}</h4>
              <p className={`${styles.infoSubtitle}`}>{t("expDriverST")}</p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <BiSupport />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>{t("hourSupportT")}</h4>
              <p className={`${styles.infoSubtitle}`}>{t("hourSupportST")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
