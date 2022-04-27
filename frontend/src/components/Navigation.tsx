import React from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../urls'

export const Navigation = () => (
  <div>
    {Object.entries(urls).map(([key, value]) => (
      <h4 className="underline decoration-indigo-400">
        <Link to={value}>{key}</Link>
      </h4>
    ))}
  </div>
)
