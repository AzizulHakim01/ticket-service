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

const SalamAir = () => {
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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let randomString = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  const randomString = generateRandomString();

  const departure = "DHAKA";
  return (
    <div className="">
      <div className="max-w-screen-md mx-auto h-screen bg-[#f7f7f7]">
        {/* Heading */}
        <div className="bg-[#729940] h-16 flex items-center">
          <img
            src="./salamairlogo.png"
            alt="Salama Air Image"
            className="w-40"
          />
        </div>
        {/* Booking PNR */}
        <div className="grid grid-cols-4 p-4 item-center">
          <div className="col-span-3 flex flex-col gap-2">
            <h1 className="uppercase text-[#729940] font-bold text-sm">
              Your Booking is confirmed
            </h1>
            <hr />
            <h1 className="font-bold text-sm text-gray-700">
              Booking Status : <span className="text-[#00d1a9]">CONFIRMED</span>
            </h1>
          </div>
          <div className="bg-[#729940] px-4 py-2">
            <p className="text-[#96c96a] font-bold text-xs">
              BOOKING REFFERENCE
            </p>
            <p className="text-white text-xl">{randomString}</p>
          </div>
        </div>
        {/* Flight Time and Date */}
        <div className="p-4 pb-0">
          <div className="bg-white h-auto grid grid-cols-3 p-4">
            <div className="col-span-2">
              <div className="flex flex-col gap-1 mb-6">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPlane} className="text-[#84b544]" />
                  <p className="text-md text-gray-500">{departure} TO MUSCAT</p>
                </div>
                <div className="">
                  <p className="text-[#84b544] text-2xl">
                    {(() => {
                      const date = new Date(formValues.flightDate);
                      const options = {
                        weekday: "short",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      };
                      return date.toLocaleDateString("en-US", options);
                    })()}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="">
                    <p className="font-bold text-xl text-gray-500">
                      {formValues.flightTime}
                    </p>
                    <p className="text-xs textg-gray-500">DAC - Departure</p>
                  </div>
                  <FontAwesomeIcon icon={faPlane} className="text-[#84b544]" />
                  <div className="">
                    {(() => {
                      const [hours, minutes] = formValues.flightTime
                        .split(":")
                        .map(Number);
                      let arrivalHours = hours + 4;
                      const arrivalMinutes = (minutes + 20) % 60;

                      // Ensure arrivalHours is within the valid range (0-23)
                      arrivalHours %= 24;

                      return (
                        <>
                          <p className="font-bold text-xl text-gray-500">
                            {arrivalHours < 10
                              ? `0${arrivalHours}`
                              : arrivalHours}
                            :
                            {arrivalMinutes < 10
                              ? `0${arrivalMinutes}`
                              : arrivalMinutes}
                          </p>
                          <p className="text-xs textg-gray-500">
                            MCT - Arrival
                          </p>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Arrival */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPlane} className="text-[#84b544]" />
                  <p className="text-md text-gray-500 uppercase">
                    MUSCAT TO {formValues.destinations}
                  </p>
                </div>
                <div className="">
                  <p className="text-[#84b544] text-2xl">
                    {(() => {
                      const date = new Date(formValues.flightDate);
                      const [hours, minutes] = formValues.flightTime
                        .split(":")
                        .map(Number);
                      if (hours + 9 > 23) {
                        date.setDate(date.getDate() + 1);
                      }
                      const options = {
                        weekday: "short",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      };
                      return date.toLocaleDateString("en-US", options);
                    })()}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-5">
                    <div className="">
                      {(() => {
                        const [hours, minutes] = formValues.flightTime
                          .split(":")
                          .map(Number);
                        let arrivalHours = hours + 9; // Adjust the hours as needed
                        const arrivalMinutes = (minutes + 20) % 60;

                        // Ensure arrivalHours is within the valid range (0-23)
                        arrivalHours %= 24;

                        return (
                          <>
                            <p className="font-bold text-xl text-gray-500">
                              {arrivalHours < 10
                                ? `0${arrivalHours}`
                                : arrivalHours}
                              :
                              {arrivalMinutes < 10
                                ? `0${arrivalMinutes}`
                                : arrivalMinutes}
                            </p>
                            <p className="text-xs textg-gray-500">
                              MCT - Departure
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  <FontAwesomeIcon icon={faPlane} className="text-[#84b544]" />
                  <div className="flex items-center gap-5">
                    <div className="">
                      {(() => {
                        const [hours, minutes] = formValues.flightTime
                          .split(":")
                          .map(Number);
                        let arrivalHours = hours + 11; // Adjust the hours as needed
                        const arrivalMinutes = (minutes + 20) % 60;

                        // Ensure arrivalHours is within the valid range (0-23)
                        arrivalHours %= 24;

                        return (
                          <>
                            <p className="font-bold text-xl text-gray-500">
                              {arrivalHours < 10
                                ? `0${arrivalHours}`
                                : arrivalHours}
                              :
                              {arrivalMinutes < 10
                                ? `0${arrivalMinutes}`
                                : arrivalMinutes}
                            </p>
                            <p className="text-xs textg-gray-500">
                              {formValues.destinations}
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-xl text-gray-500 font-semibold">
                FRIENDLY FARE
              </p>
              <p className="text-xs text-gray-500">
                OV498 | 1 stop | 11 hrs 20 mins
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto px-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase ">
              <tr className="bg-[#ebebe2]">
                <th scope="col" className="px-6 py-3 ">
                  <FontAwesomeIcon icon={faUser} className="text-[#729940]" />{" "}
                  Passenger
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    className="text-[#729940]"
                  />{" "}
                  BAGGAGE
                </th>
                <th scope="col" className="px-6 py-3">
                  <FontAwesomeIcon icon={faCouch} className="text-[#729940]" />{" "}
                  SEAT
                </th>
                <th scope="col" className="px-6 py-3">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-[#729940]"
                  />{" "}
                  MEAL
                </th>
                <th scope="col" className="px-6 py-3">
                  <FontAwesomeIcon icon={faList} className="text-[#729940]" />{" "}
                  OTHER
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {formValues.title} {formValues.fullName}
                </th>
                <td className="px-6 py-2 text-xs">
                  7kg cabin baggage <br />1 x 20kg
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalamAir;
