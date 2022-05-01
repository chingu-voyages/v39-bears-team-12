import React from 'react'

const Card = ({
  children,
  title,
  subtitle,
}: {
  children?: React.ReactNode
  title?: string
  subtitle?: string
}) => (
  <div className="bg-white shadow mt-6 rounded-lg p-6">
    {title && <h3 className="text-gray-600 font-semibold mb-4">{title}</h3>}
    {subtitle && <p className="text-gray-400 font-semibold text-sm mb-4">{subtitle}</p>}
    {children && <div className="text-gray-400 text-sm mb-4">{children}</div>}
  </div>
)

export default Card
