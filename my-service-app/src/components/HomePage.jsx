import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getDATA, getCategories } from "../assets/HandleJsonData";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const categories = getCategories();
  const data = getDATA();

  const handleNavigatetoDetailPage = (id) => {
    navigate(`/services/${id}`);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  const filteredData = data.filter((item) => {
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />
      <div className="h-16"></div>

      <div className="relative isolate px-6 pt-24 lg:px-8 bg-black">
        <div className="mx-auto max-w-2xl min-h-[calc(100vh-4rem)] flex flex-col justify-center text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Book Your Services in Minutes
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl/8">
            Browse top-rated professionals, choose your service, and schedule instantly—all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/services"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Book now
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <form className="max-w-2xl mx-auto mt-10 mb-10 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row shadow-xs rounded-base overflow-hidden">
          <select
            className="w-full sm:w-1/3 bg-transparent text-white border border-white rounded-t-base sm:rounded-l-base sm:rounded-r-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" className="text-gray-400">All Services</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat} className="text-black">{cat}</option>
            ))}
          </select>

          <input
            type="search"
            className="w-full sm:w-2/3 px-4 py-2 bg-transparent border-t border-b sm:border-t-0 sm:border-l border-emerald-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Search for services"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type="button"
            className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-4 py-2 shadow-md transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </div>
      </form>

      <div className="flex gap-6 flex-wrap items-start justify-center mb-10">
        {filteredData.length > 0 ? (
          filteredData.map((mydata) => (
            <div key={mydata.id} className="w-80 sm:w-96 bg-neutral-primary-soft p-6 border border-default rounded-lg shadow-md">
              <img className="rounded-lg mb-6" src={mydata.image} alt={mydata.title} />
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-white text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                    {mydata.rating} / 5
                  </span>
                </div>

                <h5 className="text-xl font-semibold text-white mb-4">{mydata.title}</h5>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-extrabold text-white">${mydata.price}</span>
                  <button
                    onClick={() => handleNavigatetoDetailPage(mydata.id)}
                    className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-4 py-2 shadow-md transition-colors duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No data found!</p>
        )}
      </div>

      <section className="py-12 bg-black mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Why Choose Us</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {[
              {
                title: "Affordable",
                desc: "Quality services at pocket-friendly prices.",
                bg: "bg-indigo-50",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    <rect x={2} y={6} width={20} height={12} rx={2} ry={2} />
                  </svg>
                ),
              },
              {
                title: "Fast Delivery",
                desc: "Quick turnarounds so your task finishes on time.",
                bg: "bg-emerald-50",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5A8.5 8.5 0 1 0 12 3.5a8.5 8.5 0 0 0 0 17z" />
                  </svg>
                ),
              },
              {
                title: "Trusted Services",
                desc: "Proven track record & satisfied customers.",
                bg: "bg-yellow-50",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
                  </svg>
                ),
              },
              {
                title: "Support",
                desc: "Friendly help when you need it.",
                bg: "bg-pink-50",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 0 0-12 0v4a6 6 0 0 0 12 0V8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-4" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-start space-x-4 p-4 rounded-lg border-4 border-purple-500 shadow-sm bg-gray-50`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-md ${item.bg} flex items-center justify-center`} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
