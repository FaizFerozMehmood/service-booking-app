import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const { itemCount } = useCart();
  const navigate = useNavigate();

  // const handleIconsClick = () => {
  //   navigate("/checkout"); 
  // };

  return (
    <nav className="bg-black fixed w-full z-50 top-0 left-0 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 text-white">
        <h2 className="text-lg font-bold">Service Booking App </h2>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          {/* <a href="checkout" className="hover:text-yellow-400">About</a> */}
          <a href="/services" className="hover:text-yellow-400">Services</a>
          {/* <a href="#" className="hover:text-yellow-400">Contact</a> */}
        </div>

        <div className="flex items-center space-x-4">
          {/* <button onClick={handleIconsClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5A8.5 8.5 0 1 0 12 3.5a8.5 8.5 0 0 0 0 17z" />
            </svg>
          </button> */}

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-800 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-black w-full transition-all ${open ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col p-4 space-y-2">
          <li><a href="/" className="block py-2 px-3 text-white hover:bg-gray-800 rounded">Home</a></li>
          {/* <li><a href="checkout" className="block py-2 px-3 text-white hover:bg-gray-800 rounded">About</a></li> */}
          <li><a href="/services" className="block py-2 px-3 text-white hover:bg-gray-800 rounded">Services</a></li>
          {/* <li><a href="#" className="block py-2 px-3 text-white hover:bg-gray-800 rounded">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
