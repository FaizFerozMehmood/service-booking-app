import React, { useState } from "react";
import { getDATA } from "../assets/HandleJsonData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckoutSuccessPage() {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const navigate = useNavigate()
  const [notes, setNotes] = useState("");
  const serviceId = localStorage.getItem("serviceId");
  const data = getDATA();
  const findData = data.find((mydata) => mydata.id === serviceId);
  const handleConfirmBooking = () => {
  if (!bookingDate || !bookingTime) {
    toast.error("Please select date & time");
    return;
  }

  const bookingData = {
    serviceId,
    title: findData?.title,
    price: findData?.price,
    date: bookingDate,
    time: bookingTime,
    notes,
  };

  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  toast.success("Booking confirmed successfully");

  setBookingDate("");
  setBookingTime("");
  setNotes("");
  setTimeout(() => {
  navigate("/")
}, 1000);
  
};


  return (
    <div className="max-w-6xl mx-auto p-6 mb-20">
      <h2 className="text-3xl font-bold text-heading mb-6">Checkout Success</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs flex flex-col md:flex-row">
          <img
            className="w-full h-52 md:w-44 md:h-44 object-cover rounded-base"
            src={findData?.image}
            alt={findData?.title}
          />

          <div className="md:pl-4 flex flex-col justify-between">
            <div>
              <h5 className="text-2xl font-bold text-white mb-2">
                {findData?.title}
              </h5>
              <p className="text-white mb-4">
                Price: <span className="font-semibold">{findData?.price}</span>
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center w-fit text-white bg-black hover:bg-green-500 border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
            >
              Read more
            </button>
          </div>
        </div>

        <div className="bg-white p-6 border border-default rounded-base shadow-xs">
          <h3 className="text-xl font-semibold text-white mb-4">
            Booking Details
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Select Date
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full border border-default rounded-base px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Select Time
              </label>
              <input
                type="time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full border border-default rounded-base px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Additional Notes
              </label>
              <textarea
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any instructions or notes..."
                className="w-full border border-default rounded-base px-3 py-2"
              ></textarea>
            </div>

            <button
              onClick={handleConfirmBooking}
              className="mt-2 w-full bg-black hover:bg-green-500 text-white font-medium py-2.5 rounded-base shadow-xs"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
