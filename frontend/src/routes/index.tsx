import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Organisation, Projects } from '../pages'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import { adminUrls } from '../urls'
import AdminLayout from '../utils/AdminLayout'
import AuthLayout from '../utils/AuthLayout'

export const AppRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path={'/'} element={<Home />} />
      <Route path={adminUrls.home} element={<Home />} />
      <Route path={adminUrls.organisation} element={<Organisation />} />
      <Route path={adminUrls.projects} element={<Projects />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
