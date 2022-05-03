import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'
import { navItems } from '../urls'

const Sidebar = () => {
  const { handleLogOut } = useContext(AppContext)

  return (
    <div className="fixed bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <div className="flex items-center justify-start mx-6 mt-10">
            <span className="text-gray-600 dark:text-gray-300 text-2xl font-bold">TestIt</span>
          </div>
          <nav className="mt-10 px-6 ">
            {navItems.map(({ name, path, Icon }) => (
              <Link
                className="hover:text-orange flex items-center p-2 my-6 transition-colors duration-200 text-gray-400 rounded-lg capitalize"
                to={path}
                key={name}
              >
                <div className="flex items-center">
                  <div className="mr-1">{Icon}</div>
                  <span className="text-lg font-normal">{name}</span>
                </div>
              </Link>
            ))}
            <Link
              className="hover:text-orange flex items-center p-2 my-6 transition-colors duration-200 text-gray-400 rounded-lg capitalize"
              to="#"
              onClick={handleLogOut}
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
