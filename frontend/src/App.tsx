import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import './index.css'
import { AppProvider } from './contexts'
export const App = () => (
  <Router>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </Router>
)
