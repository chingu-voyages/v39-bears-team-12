import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Navigation } from './components'

export const App = () => (
  <Router>
    <AppRoutes />
    <Navigation />
  </Router>
)
