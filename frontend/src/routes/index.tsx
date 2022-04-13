import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Organisation, Projects } from '../pages'
import { urls } from '../urls'

export const AppRoutes = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={urls.home || '/'} element={<Home />} />
    <Route path={urls.organisation} element={<Organisation />} />
    <Route path={urls.projects} element={<Projects />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
)
