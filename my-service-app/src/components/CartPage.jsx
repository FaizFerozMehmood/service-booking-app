import React from "react";
import { getDATA } from "../assets/HandleJsonData";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const data = getDATA()
  const navigate = useNavigate()
  const handleNavigatetoDetailPage = (id)=>{
navigate(`/services/${id}`)
  }

  return (
    // <div className="flex gap-4 flex-wrap items-start justify-center">
    //   <div className="max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
    //     <a href="#">
    //       <img
    //         className="rounded-base mb-6"
    //         src="/docs/images/products/apple-watch.png"
    //         alt="product image"
    //       />
    //     </a>
    //     <div>
    //       <div className="flex items-center space-x-3 mb-6">
    //         <div className="flex items-center space-x-1 rtl:space-x-reverse">
    //           <svg
    //             className="w-5 h-5 text-fg-yellow"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    //           </svg>
    //           <svg
    //             className="w-5 h-5 text-fg-yellow"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    //           </svg>
    //           <svg
    //             className="w-5 h-5 text-fg-yellow"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    //           </svg>
    //           <svg
    //             className="w-5 h-5 text-fg-yellow"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    //           </svg>
    //           <svg
    //             className="w-5 h-5 text-fg-yellow"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    //           </svg>
    //         </div>
    //         <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
    //           4.8 out of 5
    //         </span>
    //       </div>
    //       <a href="#">
    //         <h5 className="text-xl text-heading font-semibold tracking-tight">
    //           Apple Watch Series 7 GPS, Aluminium Case, Starlight
    //         </h5>
    //       </a>
    //       <div className="flex items-center justify-between mt-6">
    //         <span className="text-3xl font-extrabold text-heading">$599</span>
    //         <button
    //           type="button"
    //           className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-4 py-2 shadow-md transition-colors duration-200"
    //         >
    //           <svg
    //             className="w-4 h-4 me-1.5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
    //             />
    //           </svg>
    //           Add to cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex gap-6 flex-wrap items-start justify-center">
        {data.length > 0
          ? data.map((mydata) => (
              <div
                key={mydata.id}
                className="w-80 sm:w-96 bg-black p-6 border border-default rounded-lg shadow-md"
              >
                <a href="#">
                  <img
                    className="rounded-lg mb-6"
                    src="/docs/images/products/apple-watch.png"
                    alt="product image"
                  />
                </a>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                      {mydata.rating} / 5
                    </span>
                  </div>

                  <a href="#">
                    <h5 className="text-xl font-semibold text-white mb-4">
                      {mydata.title}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-extrabold text-white">
                      ${mydata.price}
                    </span>

                    <button
                      onClick={() => handleNavigatetoDetailPage(mydata.id)}
                      type="button"
                      className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-4 py-2 shadow-md transition-colors duration-200"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          : "No data..!"}
      </div>
  );
}

export default CartPage;
