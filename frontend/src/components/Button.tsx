import React from 'react'

type ButtonProps = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  Icon?: React.ReactNode
  children: React.ReactNode
  styles?: string
}

const primary = 'bg-orange-500 hover:bg-orange-700 text-white font-bold'
const secondary = 'border-2 border-indigo-100 hover:border-indigo-200 text-indigo-500'

const getVariant = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return primary
    case 'secondary':
      return secondary
    default:
      return primary
  }
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  Icon,
  onClick,
  styles,
  children,
}) => (
  <button
    className={` ${getVariant(
      variant
    )} py-2 px-4 rounded focus:outline-none focus:shadow-outline ${styles} min-w-8 flex items-center gap-2 w-fit`}
    type="button"
    onClick={onClick}
  >
    {children}
    {Icon}
  </button>
)
