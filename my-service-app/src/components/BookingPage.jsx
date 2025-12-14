import React, { useState } from 'react'
import { getDATA } from '../assets/HandleJsonData'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'

function BookingPage() {
  const [processing,setIsProcessing] = useState(false)
  const getServiceId = localStorage.getItem("serviceId")
  const navigate = useNavigate()
  const allData = getDATA()
const {increamentCount, decrementCount} = useCart()

  const findData = allData.find((mydata)=> mydata.id === getServiceId)
const handleBooking = ()=>{
navigate("")
}
  console.log(findData)
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-black shadow-lg rounded-xl p-6">
        <img
          src={findData.image}
          alt={findData.title}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{findData.title}</h1>

        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
          {findData.category}
        </span>

        <p className="text-white mt-3">{findData.shortDescription}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{findData.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-600">{findData.duration}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">Rating</h3>
            <p className="text-gray-600">{findData.rating} ⭐</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Features</h2>

          <ul className="list-disc ml-6 text-gray-700">
            {findData.features.map((dta, i) => (
              <li key={i}>{dta}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Rs {findData.price}</h2>
          <button
            onClick={increamentCount}
            disabled={processing}
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            {processing ? "Pls wait..." : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingPage