import React from 'react'
import { Outlet } from 'react-router-dom'
import { OrganisationCard } from '../components/OrganisationCard'
import Sidebar from '../components/Sidebar'
const AdminLayout = () => (
  <div className="flex flex-row w-full">
    <div className="flex flex-col">
      <Sidebar />
    </div>
    <div className="flex flex-col flex-grow min-h-full bg-grey p-10 relative ml-72">
      <OrganisationCard />
      <Outlet />
    </div>
  </div>
)

export default AdminLayout
