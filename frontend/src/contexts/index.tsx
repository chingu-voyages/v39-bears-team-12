import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Organisation as OrganisationType } from '../../../types/organisation'
import { Test } from '../../../types/test'

type AppContextType = {
  organisation: OrganisationType
  testCases: Test[]
  getOrganisation: (id: string) => Promise<void>
  updateOrganisation: (updates: Partial<OrganisationType>) => void
  getTestCases: () => void
  handleLogOut: () => void
  handleLogin: (id: string) => void
}

export const AppContext = createContext({} as AppContextType)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [organisation, setOrganisation] = useState<OrganisationType>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [testCases, setTestCases] = useState<Test[]>()
  const navigate = useNavigate()

  const getOrganisation = async (id: string) => {
    const res = await fetch(`/api/organisation/${id}`)
    const json = await res.json()
    setOrganisation(json)
  }

  const updateOrganisation = (updates: Partial<OrganisationType>) => {
    setOrganisation((org) => ({ ...org, ...updates }))
  }

  
  const getTestCases = async () => {
    if (organisation) {
      const res = await fetch(`/api/testCases/${organisation.id}`)
      const json = await res.json()
      setTestCases(json)
    }
  }

  const handleLogOut = () => {
    setOrganisation(undefined)
    setIsLoggedIn(false)
  }

  const handleLogin = async (id: string) => {
    console.log('sdlfknersf')
    await getOrganisation(id)
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
    else navigate('/home')
  }, [isLoggedIn])

  return (
    <AppContext.Provider
      value={{
        organisation,
        getOrganisation,
        updateOrganisation,
        testCases,
        getTestCases,
        handleLogOut,
        handleLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
