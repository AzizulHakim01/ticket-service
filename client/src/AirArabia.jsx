import {
  faCouch,
  faList,
  faPlane,
  faSuitcase,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const AirArabia = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  //getting value from reducer
  const formValues = useSelector((state) => state.flightBooking);
  console.log(formValues);
  //GENERATING PNR NUMBER
  function generateRandomString() {
    const characters = "123456789";
    let randomString = "";

    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  const randomString = generateRandomString();

  const departure = "DHAKA";
  return (
    <div className="">
      <div className="max-w-screen-md mx-auto h-screen bg-[#fff]">
        {/* Heading */}
        <div className=" h-16 flex items-center justify-between">
          <img
            src="./Air-Arabia-Logo.png"
            alt="Air Arabia Image"
            className="w-40"
          />
          <p className="text-xs">Tel: +971 6 558 0000, Fax: +971 6 558 0008</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold text-center mt-4">
            RESERVATION CONFIRMED
          </h1>
          <img src="./barcode.png" alt="barcode" className="h-10 w-56" />
        </div>
        <div className="h-1 bg-gray-600 my-5" />
        <div>
          <div className="grid grid-cols-4 items-center font-bold">
            <p className="text-xs"><span className="bg-black text-xs rounded-full">10</span> RESERVATION NUMBER (PNR)</p>
            <span className="font-bold text-md bg-gray-400 h-7 px-2 w-36 flex justify-start items-center">
              {randomString}
            </span>
            <p className="text-xs">RESERVATION NUMBER (PNR)</p>
            <span className="font-bold text-md bg-gray-400 h-7 px-2 w-36 flex justify-start items-center">
              {randomString}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirArabia;
