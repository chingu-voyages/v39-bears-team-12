import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="bg-indigo-900 relative overflow-hidden h-screen">
    <img
      src="https://img.remediosdigitales.com/381c6c/galaxy-gd4eb5701e_1280/1366_2000.png"
      className="absolute h-full w-full object-cover"
    />
    <div className="inset-0 bg-black opacity-25 absolute"></div>
    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
      <div className="w-full font-mono flex flex-col items-center relative z-10">
        <Outlet />
      </div>
    </div>
  </div>
)

export default AuthLayout
