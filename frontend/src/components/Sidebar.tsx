import React from 'react'
import { Link } from 'react-router-dom'
import { adminUrls } from '../urls'

const Sidebar = () => {
  const logOut = () => {
    alert('Log out')
  }
  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <div className="flex items-center justify-start mx-6 mt-10">
            <span className="text-gray-600 dark:text-gray-300 text-2xl font-bold">TestIt</span>
          </div>
          <nav className="mt-10 px-6 ">
            {Object.entries(adminUrls).map(([key, value]) => (
              <Link
                className="hover:text-orange flex items-center p-2 my-6 transition-colors duration-200 text-gray-600 rounded-lg capitalize"
                to={value}
                key={key}
              >
                <span className="text-lg font-normal">{key}</span>
              </Link>
            ))}
            <Link
              className="hover:text-orange flex items-center p-2 my-6 transition-colors duration-200 text-gray-600 rounded-lg capitalize"
              to="#"
              onClick={logOut}
            >
              <span className="text-lg font-normal">Log out</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar