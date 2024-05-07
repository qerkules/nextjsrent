import styles from "./styles.module.css";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import UsbInput from "./icons/UsbInput.jsx";
import UsbCharger from "./icons/UsbCharger.jsx";
import Carplay from "./icons/Carplay.jsx";
import Bluetooth from "./icons/Bluetooth.jsx";
import HeatedSeat from "./icons/HeatedSeat.jsx";
import BackCamera from "./icons/BackCamera.jsx";
import Insurance from "./icons/Insurance.jsx";
import Card from "../../components/card/Card.jsx";
import { getTranslations, getLocale } from "next-intl/server";
import Head from "next/head";
import Slider from "./slider";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { redirect } from "next/navigation";
import Booking from "@/app/components/booking/Booking";
import Link from "next/link";
import Whatsapp from "@/app/components/whatsapp/Whatsapp";

const Carpage = async ({ params }) => {
  const t = await getTranslations("Index");
  const local = await getLocale();
  const messages = {
    book: t("bookNow"),
    over: t("iAmOver"),
    email: t("email"),
    number: t("whatNumber"),
    surname: t("surname"),
    name: t("name"),
    contact: t("contactInfo"),
    hotel: t("hotel"),
    airport: t("airport"),
    returnDate: t("returnDate"),
    pickUpDate: t("pickUpDate"),
  };
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_DATA_LINK}/${params.slug}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  if (data === null) {
    redirect(`/${local}`);
  }

  let carReq = await fetch(`${process.env.NEXT_PUBLIC_DATA_LINK}`);
  let cars = await carReq.json();

  const carClass = () => {
    if (data) {
      if (data.class === "Econom Class") {
        return t("ecoClass");
      } else if (data.class === "Middle Class") {
        return t("middleClass");
      } else if (data.class === "Suv Class") {
        return t("suvClass");
      } else if (data.class === "Premium Class") {
        return t("premiumClass");
      } else if (data.class === "Cabrio Class") {
        return t("cabrioClass");
      }
    }
  };
  const fuelType = () => {
    if (data) {
      if (data.mainDetails.fuel === "Gas") {
        return t("gas");
      } else if (data.mainDetails.fuel === "Diesel") {
        return t("diesel");
      }
    }
  };
  const carType = () => {
    if (data) {
      if (data.mainDetails.type === "Sedan") {
        return t("sedan");
      } else if (data.mainDetails.type === "Suv") {
        return t("suv");
      } else if (data.mainDetails.type === "Cabrio") {
        return t("cabrio");
      }
    }
  };
  const carSeats = () => {
    if (data) {
      if (data.mainDetails.seats === "5 Seater") {
        return `5 ${t("seater")}`;
      } else if (data.mainDetails.seats === "7 Seater") {
        return `7 ${t("seater")}`;
      }
    }
  };

  const mainComponent = (
    <div className={`${styles.container}`}>
      <Head>
        <title>Car Page - Rent a car in Baku</title>
        <meta
          name="description"
          content="You can find every details about all cars model and book easy just one click"
        />
      </Head>
      <Whatsapp />
      <div className={`${styles.desktopVersion}`}>
        <div className={`${styles.leftSection}`}>
          <Slider images={data.images} />
        </div>

        <div className={`${styles.rightSection}`}>
          <div className={`${styles.titleSection}`}>
            <h1 className={`${styles.title}`}>Rent a car in Baku</h1>
            <h2 className={`${styles.carName}`}>
              {data && data.brand + " " + data.model + " " + data.year}
            </h2>
            <h3 className={`${styles.class}`}>{carClass()}</h3>
          </div>

          <div className={`${styles.description}`}>
            <div className={`${styles.box}`}>
              <FaCar className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{carType()}</span>
            </div>
            <div className={`${styles.box}`}>
              <FaGasPump className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{fuelType()}</span>
            </div>
            <div className={`${styles.box}`}>
              <TbManualGearbox className={`${styles.icon}`} />
              &nbsp;&nbsp;
              <span>{t("auto")}</span>
            </div>
            <div className={`${styles.box}`}>
              <GiCarDoor className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{t("doors")}</span>
            </div>
            <div className={`${styles.box}`}>
              <PiEngineFill className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.engine}</span>
            </div>
            <div className={`${styles.box}`}>
              <MdOutlineAirlineSeatReclineExtra className={`${styles.icon}`} />
              &nbsp;&nbsp;
              <span>{carSeats()}</span>
            </div>
          </div>

          <div className={`${styles.priceSection}`}>
            <div>
              <div className={`${styles.price}`}>
                &nbsp;{" "}
                {local === "az" ? `₼${data.priceAzn}` : `$ ${data.priceUsd}`}{" "}
                <span className={`${styles.day}`}>/{t("day")}</span>{" "}
              </div>
              <p className={`${styles.tip}`}>{t("priceTip")}</p>
            </div>
            <Link href="#booking" className={`${styles.bookNow}`}>
              {t("bookNow")}
            </Link>
          </div>

          <div className={`${styles.aboutCar}`}>
            <h4 className={`${styles.aboutCarTitle}`}>{t("features")}</h4>

            <div className={`${styles.carFeature}`}>
              <Bluetooth className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("bluetooth")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbInput className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("usbIn")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbCharger className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("usbCh")}</span>
            </div>
            {data && data.brand + " " + data.model !== "Toyota Camry" && (
              <div className={`${styles.carFeature}`}>
                <HeatedSeat className={`${styles.featureIcon}`} />
                &nbsp;&nbsp;
                <span>{t("heatedSeat")}</span>
              </div>
            )}
            <div className={`${styles.carFeature}`}>
              <BackCamera className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("backupCam")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <Insurance className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("cascoIns")}</span>
            </div>
            {data && Number(data.year) > 2016 && (
              <div className={`${styles.carFeature}`}>
                <Carplay className={`${styles.featureIcon}`} />
                &nbsp;&nbsp;
                <span>{t("carPlay")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="booking"></div>
      <Booking messages={messages} carName={`${data.brand} ${data.model}`} />
      <div className={`${styles.cardSection}`}>
        <h4 className={`${styles.cardTitle}`}>{t("availableCars")}</h4>
        <div className={`${styles.cardContainer}`}>
          {cars &&
            cars.map((car) => {
              return <Card car={car} key={car.number} />;
            })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {mainComponent}
      <Footer />
    </>
  );
};

export default Carpage;
