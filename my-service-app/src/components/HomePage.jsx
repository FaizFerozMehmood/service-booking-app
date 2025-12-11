import React from "react";
import heroImg from "../assets/heroImg.jpg";

function HomePage() {
  return (
    <>
      <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <el-dialog>
            <dialog
              id="mobile-menu"
              className="backdrop:bg-transparent lg:hidden"
            >
              <div tabIndex={0} className="fixed inset-0 focus:outline-none">
                <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>
                    <button
                      type="button"
                      command="close"
                      commandfor="mobile-menu"
                      className="-m-2.5 rounded-md p-2.5 text-gray-200"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6"
                      >
                        <path
                          d="M6 18 18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Product
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Features
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Marketplace
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Company
                        </a>
                      </div>
                      <div className="py-6">
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </header>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-400">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Book Your Services in Minutes
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Browse top-rated professionals, choose your service, and
                schedule instantly—all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Book now
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </div>
      </div>



      {/* .................................................. */}

      <form className="max-w-2xl mx-auto mt-10 mb-10">
  <div className="flex shadow-xs rounded-base -space-x-0.5">
    <label
      htmlFor="search-dropdown"
      className="block mb-2.5 text-sm font-medium text-heading sr-only "
    >
      Your Email
    </label>
    <button
      id="dropdown-button"
      data-dropdown-toggle="dropdown"
      type="button"
      className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none"
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
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
        />
      </svg>
      All categories
      <svg
        className="w-4 h-4 ms-1.5"
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
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 9-7 7-7-7"
        />
      </svg>
    </button>
    <div
      id="dropdown"
      className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
    >
      <ul
        className="p-2 text-sm text-body font-medium"
        aria-labelledby="dropdown-button"
      >
        <li>
          <a
            href="#"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Shopping
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Images
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            News
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Finance
          </a>
        </li>
      </ul>
    </div>
    <input
      type="search"
      id="search-dropdown"
      className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
      placeholder="Search for products"
      required=""
    />
    <button
      type="button"
      className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none"
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





{/* ..................................................................................... */}
  <div className="flex gap-4 flex-wrap items-start justify-center">
<div className="max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
  <a href="#">
    <img
      className="rounded-base mb-6"
      src="/docs/images/products/apple-watch.png"
      alt="product image"
    />
  </a>
  <div>
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </div>
      <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
        4.8 out of 5
      </span>
    </div>
    <a href="#">
      <h5 className="text-xl text-heading font-semibold tracking-tight">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight
      </h5>
    </a>
    <div className="flex items-center justify-between mt-6">
      <span className="text-3xl font-extrabold text-heading">$599</span>
      <button
        type="button"
        className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</div>





<div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
  <a href="#">
    <img
      className="rounded-base mb-6"
      src="/docs/images/products/apple-watch.png"
      alt="product image"
    />
  </a>
  <div>
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </div>
      <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
        4.8 out of 5
      </span>
    </div>
    <a href="#">
      <h5 className="text-xl text-heading font-semibold tracking-tight">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight
      </h5>
    </a>
    <div className="flex items-center justify-between mt-6">
      <span className="text-3xl font-extrabold text-heading">$599</span>
      <button
        type="button"
        className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</div>









<div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs ">
  <a href="#">
    <img
      className="rounded-base mb-6"
      src="/docs/images/products/apple-watch.png"
      alt="product image"
    />
  </a>
  <div>
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </div>
      <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
        4.8 out of 5
      </span>
    </div>
    <a href="#">
      <h5 className="text-xl text-heading font-semibold tracking-tight">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight
      </h5>
    </a>
    <div className="flex items-center justify-between mt-6">
      <span className="text-3xl font-extrabold text-heading">$599</span>
      <button
        type="button"
        className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</div>










<div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
  <a href="#">
    <img
      className="rounded-base mb-6"
      src="https://pngtree.com/so/playing-card"
      alt="product image"
    />
  </a>
  <div>
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <svg
          className="w-5 h-5 text-fg-yellow"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </div>
      <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
        4.8 out of 5
      </span>
    </div>
    <a href="#">
      <h5 className="text-xl text-heading font-semibold tracking-tight">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight
      </h5>
    </a>
    <div className="flex items-center justify-between mt-6">
      <span className="text-3xl font-extrabold text-heading">$599</span>
      <button
        type="button"
        className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</div>

</div>


{/* ................................................................................ */}


<>
  <section className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Us</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-start">
        <div className="flex items-start space-x-4 p-4 rounded-lg border shadow-sm bg-gray-50">
          
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center"
            aria-hidden="true"
          >
           
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3"
              />
              <rect x={2} y={6} width={20} height={12} rx={2} ry={2} />
            </svg>
          </div>
          {/* Text */}
          <div>
            <h3 className="text-lg font-medium">Affordable</h3>
            <p className="text-sm text-gray-600">
              Quality services at pocket-friendly prices.
            </p>
          </div>
        </div>
       
        <div className="flex items-start space-x-4 p-4 rounded-lg border shadow-sm bg-gray-50">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center"
            aria-hidden="true"
          >
           
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.5A8.5 8.5 0 1 0 12 3.5a8.5 8.5 0 0 0 0 17z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick turnarounds so your task finishes on time.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 rounded-lg border shadow-sm bg-gray-50">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-yellow-50 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Trusted Services</h3>
            <p className="text-sm text-gray-600">
              Proven track record &amp; satisfied customers.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 rounded-lg border shadow-sm bg-gray-50">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-md bg-pink-50 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 8a6 6 0 0 0-12 0v4a6 6 0 0 0 12 0V8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20v-4"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Support</h3>
            <p className="text-sm text-gray-600">
              Friendly help when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  );
}

export default HomePage;
