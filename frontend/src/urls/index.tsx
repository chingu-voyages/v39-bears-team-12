import React from 'react'
import { HomeIcon } from '../components/Icons/Home'

type TNavItem = { name: string; path: string; Icon?: React.ReactElement }

export const navItems: TNavItem[] = [
  { name: 'home', path: '/home', Icon: <HomeIcon /> },
  { name: 'organisation', path: '/organisation', Icon: undefined },
  { name: 'projects', path: '/projects', Icon: undefined },
  { name: 'Test cases', path: '/test-cases', Icon: undefined },
  { name: 'Example Components', path: '/components', Icon: undefined },
]
