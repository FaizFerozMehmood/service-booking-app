import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDATA } from "../assets/HandleJsonData";

function ServiceDetailsPage() {
  const mydata = getDATA();
  const [processing, setIsProcessing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const filter = mydata.find((data) => data.id === id);

  const handeAddToCart = (id) => {
    console.log("added to card", id);
    localStorage.setItem("serviceId", id);
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/checkout");
    }, 2000);
  };

  console.log(filter);

  return (
  <div className="max-w-5xl mx-auto p-6 pb-24 sm:pb-12">
  <div className="bg-black shadow-lg rounded-xl p-6">
    <img
      src={filter.image}
      alt={filter.title}
      className="w-full h-72 object-cover rounded-xl mb-6"
    />

    <h1 className="text-3xl font-bold mb-2">{filter.title}</h1>

    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
      {filter.category}
    </span>

    <p className="text-white mt-3">{filter.shortDescription}</p>

    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <p className="text-white leading-relaxed">{filter.description}</p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-black">Duration</h3>
        <p className="text-black">{filter.duration}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-black">Rating</h3>
        <p className="text-black">{filter.rating} ⭐</p>
      </div>
    </div>

    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Features</h2>

      <ul className="list-disc ml-6 text-white">
        {filter.features.map((dta, i) => (
          <li key={i}>{dta}</li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-bold">Rs {filter.price}</h2>
      <button
        onClick={() => handeAddToCart(filter.id)}
        disabled={processing}
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        {processing ? "Pls wait..." : "Add To Card"}
      </button>
    </div>
  </div>
</div>

  );
}

export default ServiceDetailsPage;
