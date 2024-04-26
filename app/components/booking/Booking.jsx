"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox, FormGroup } from "@mui/material";

const Booking = ({ carName, messages }) => {
  const [pickUpDate, setPickUpDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [pickUpLocation, setPickUpLocation] = React.useState("");
  const [returnLocation, setReturnLocation] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pickUpDate !== "" && returnDate !== "" && pickUpLocation !== "" && returnLocation !== "") {
      try {
        const url = `https://wa.me/+994105407474?text=Car%20Name%3A%20${carName}%0APick%20up%20date%3A%20${pickUpDate}%20${pickUpLocation}%0AReturn%20Date%3A%20${returnDate}%20${returnLocation}%0A%0A`;
        window.open(url, "_blank", "noopener,noreferrer");

        alert("Email successfully sent, Wait for the offer");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.carName}`}>{carName}</div>

        <FormGroup>
          <div className={`${styles.pickupSection}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={messages.pickUpDate}
                onChange={(newValue) => {
                  setPickUpDate(newValue.$d.toString().slice(4, 15));
                }}
                sx={{ width: 170 }}
                required
              />
            </LocalizationProvider>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
                className={`${styles.radioGroup}`}
              >
                <FormControlLabel
                  label={messages.airport}
                  control={<Radio />}
                  value="Airport"
                  onChange={() => setPickUpLocation("Airport")}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
                <FormControlLabel
                  value={messages.hotel}
                  onChange={() => setPickUpLocation("Hotel")}
                  control={<Radio />}
                  label={messages.hotel}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className={`${styles.pickupSection}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={messages.returnDate}
                sx={{ width: 170 }}
                variant="standart"
                onChange={(newValue) => {
                  setReturnDate(newValue.$d.toString().slice(4, 15));
                }}
                required
              />
            </LocalizationProvider>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
                className={`${styles.radioGroup}`}
              >
                <FormControlLabel
                  value="Airport"
                  onChange={() => setReturnLocation("Airport")}
                  control={<Radio />}
                  label={messages.airport}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
                <FormControlLabel
                  value="Hotel"
                  onChange={() => setReturnLocation("Hotel")}
                  control={<Radio />}
                  label={messages.hotel}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className={`${styles.dFlex}`}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label={messages.over}
            />
          </div>
          <div className={`${styles.bookNow}`} onClick={handleSubmit}>
            {messages.book}
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Booking;
