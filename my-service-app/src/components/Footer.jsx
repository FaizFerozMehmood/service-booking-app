import React from 'react'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black shadow-xs border-t border-default mt-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        
        <span className="text-sm text-white sm:text-center transition-colors duration-300 hover:text-gray-300">
          © 2025 <a className="hover:underline hover:text-gray-300 transition-all duration-300">Service Booking Web App</a>
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 gap-4">
          <li>
            <a href="#" className="relative hover:text-gray-300 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
              About
            </a>
          </li>
          
          
          <li>
            <a href="#" className="relative hover:text-gray-300 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer
