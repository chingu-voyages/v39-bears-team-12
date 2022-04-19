import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Navigation } from './components'
import './index.css'
export const App = () => (
  <Router>
    <AppRoutes />
    <Navigation />
  </Router>
)
