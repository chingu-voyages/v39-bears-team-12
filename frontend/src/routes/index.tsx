import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Organisation, Projects } from '../pages'
import { ComponentExamples } from '../pages/ComponentExamples'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import AdminLayout from '../utils/AdminLayout'
import AuthLayout from '../utils/AuthLayout'

export const AppRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path={'/'} element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/organisation" element={<Organisation />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/components" element={<ComponentExamples />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
