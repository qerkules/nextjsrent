import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import { useTranslations } from "next-intl";
import Head from "next/head";
import CarClasses from "./CarClasses";

const Homepage = async () => {
  const t = useTranslations("Index");

  // https://rentacarm.vercel.app/car/filter/Middle%20Class
  let req = await fetch("https://rentacarm.vercel.app/car");
  let data = await req.json();

  const availableCars = () => {
    if (data !== undefined) {
      return data.map((car) => <Card car={car} key={car.number} />);
    }
  };

  let classes = {
    econom: t("ecoRent"),
    middle: t("middleRent"),
    premium: t("premiumRent"),
    suv: t("suvRent"),
  };

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Home Page - Rent a car in Baku</title>
        <meta
          name="description"
          content="Welcome to Rent a car in Baku Homepage. You can book with one click which car you want."
        />
      </Head>
      <Header />
      <Ourservices />
      <BrandBanner />
      <div id="available-cars" className={`${styles.cardSection}`}>
        <h4 className={`${styles.cardTitle}`}>{t("availableCars")}</h4>
        {/* <CarClasses message={classes} /> */}
        <div className={`${styles.cardContainer}`}>{availableCars()}</div>
      </div>
    </div>
  );
};

export default Homepage;
