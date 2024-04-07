"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const CarClasses = ({ message }) => {
  const [selectedClass, setClass] = useState("all");
  return (
    <div className={`${styles.classSection}`}>
      <div
        className={`${styles.classContainer} 
            ${selectedClass === "Econom Class" && styles.selected}`}
        onClick={() => setClass("Econom Class")}
      >
        {message.econom}
      </div>
      <div
        className={`${styles.classContainer}  ${
          selectedClass === "Middle Class" && styles.selected
        }`}
        onClick={() => setClass("Middle Class")}
      >
        {message.middle}
      </div>
      <div
        className={`${styles.classContainer}     ${
          selectedClass === "Premium Class" && styles.selected
        }`}
        onClick={() => setClass("Premium Class")}
      >
        {message.premium}
      </div>
      <div
        className={`${styles.classContainer} ${
          selectedClass === "Suv Class" && styles.selected
        }`}
        onClick={() => setClass("Suv Class")}
      >
        {message.suv}
      </div>
    </div>
  );
};

export default CarClasses;
