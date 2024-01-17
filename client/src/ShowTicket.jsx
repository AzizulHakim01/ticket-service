import React from "react";
import { useSelector } from "react-redux";

const ShowTicket = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  // Access values from the Redux store
  const formValues = useSelector((state) => state.flightBooking);
  console.log('formValues:', formValues);
  
  // Define logo mapping based on selectedAirline
  const airlineLogoMap = {
    IndiGo: "./logo.svg",
    SalamAir: "./salamairlogo.png",
    TurkishAir: "./Turkish-Airlines-Logo.png",
    BangladeshBiman: "./Biman-Bangladesh-Airlines-Logo.png",
    AirArabia: "./Air-Arabia-Logo.png", // Assuming the same logo as BangladeshBiman for AirArabia
  };

  // Get the appropriate logo based on selectedAirline
  const selectedAirlineLogo = airlineLogoMap[formValues.selectedAirline] || "";

  // Check if destinations is an array before calling join
  const destinationsString = Array.isArray(formValues.destinations) ? formValues.destinations.join(", ") : "";

  return (
    <div>
      <img src={selectedAirlineLogo} alt={`${formValues.selectedAirline} Logo`} />
      <div>Booking Date: {formattedDate}</div>
      <div>Title: {formValues.title}</div>
      <div>Full Name: {formValues.fullName}</div>
      <div>Passport Number: {formValues.passportNumber}</div>
      <div>Selected Airline: {formValues.selectedAirline}</div>
      <div>Flight Time: {formValues.flightTime}</div>
      <div>Destinations: {destinationsString}</div>
      <div>Flight Date: {formValues.flightDate}</div>
    </div>
  );
};

export default ShowTicket;
