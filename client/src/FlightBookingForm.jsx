import React, { useEffect } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setFormValues } from "./reducer/flightBookingSlice";
import { airportOptions } from "../data";
import { useNavigate } from "react-router-dom";

const FlightBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.flightBooking);

  // FlightBookingForm.jsx
  const handleChange = (field, value) => {
    dispatch(setFormValues({ [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.selectedAirline === "IndiGo") {
      navigate("/indigo");
  } else if (formValues.selectedAirline === "SalamAir") {
      navigate("/salam");
  }
  else if (formValues.selectedAirline === "TurkishAir") {
    navigate("/turkish");
}
  else if (formValues.selectedAirline === "BangladeshBiman") {
    navigate("/biman");
}
  else if (formValues.selectedAirline === "AirArabia") {
    navigate("/airarabia");
}
  };

  // Assuming this logic is in your component
  useEffect(() => {
    // Set initial values when the component mounts
    dispatch(setFormValues({ title: "Mr", selectedAirline: "IndiGo" }));
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <h2 className="text-4xl font-bold mb-4 text-center">Flight Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Title:
            <select
              className="block w-full p-2 border rounded-md"
              value={formValues.title || "Mr"} // Use 'Mr' as the default if formValues.title is falsy
              onChange={(e) => handleChange("title", e.target.value)}
            >
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
            </select>
          </label>
          <label className="block mb-2">
            Full Name:
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={formValues.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Passport Number:
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={formValues.passportNumber}
              onChange={(e) => handleChange("passportNumber", e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Select Airline:
            <select
              className="block w-full p-2 border rounded-md"
              value={formValues.selectedAirline}
              onChange={(e) => handleChange("selectedAirline", e.target.value)}
            >
              <option value="IndiGo">IndiGo</option>
              <option value="SalamAir">SalamAir</option>
              <option value="TurkishAir">Turkish Air</option>
              <option value="BangladeshBiman">Bangladesh Biman</option>
              <option value="AirArabia">Air Arabia</option>
            </select>
          </label>
          <label className="block mb-2">
  Flight Time:
  <div className="relative">
    <TimePicker
      onChange={(time) => handleChange("flightTime", time)}
      value={formValues.flightTime}
      className="w-full p-2 border rounded-md"
      // Add any other props you need
    />
    {/* Add a custom icon or styling here if needed */}
  </div>
</label>
          <div>
            <label className="block mb-2">
              Select Destination:
              <select
                className="w-full p-2 border rounded-md"
                value={formValues.destinations || ""}
                onChange={(e) => handleChange("destinations", e.target.value)}
              >
                <option value="" disabled>
                  Select a Destination
                </option>
                {airportOptions.map((airport, index) => (
                  <option key={index} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="block mb-2">
            Flight Date:
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              value={formValues.flightDate}
              onChange={(e) => handleChange("flightDate", e.target.value)}
            />
          </label>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Book Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
