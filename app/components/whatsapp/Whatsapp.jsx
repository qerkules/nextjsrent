import React from "react";
import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a className={`${styles.container}`} href="https://wa.me/+994105407474" >
      <FaWhatsapp className={`${styles.icon}`} />
    </a>
  );
};

export default Whatsapp;
