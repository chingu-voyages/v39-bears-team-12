import React from 'react'

type TNavItem = { name: string; path: string; Icon?: React.ReactElement }

export const navItems: TNavItem[] = [
  { name: 'home', path: '/home', Icon: undefined },
  { name: 'Test cases', path: '/test-cases', Icon: undefined },
  { name: 'Example Components', path: '/components', Icon: undefined },
]
