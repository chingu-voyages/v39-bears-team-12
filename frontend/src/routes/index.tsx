import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Organisation, Projects } from '../pages'
import NotFound from '../pages/NotFound'
import { urls } from '../urls'
import AdminLayout from '../utils/AdminLayout'
import AuthLayout from '../utils/AuthLayout'

export const AppRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path={urls.home || '/'} element={<Home />} />
      <Route path={urls.organisation} element={<Organisation />} />
      <Route path={urls.projects} element={<Projects />} />
    </Route>
    <Route element={<AuthLayout />}></Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
