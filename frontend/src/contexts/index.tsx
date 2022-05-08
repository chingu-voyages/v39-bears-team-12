import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Organisation as OrganisationType } from '../../../types/organisation'
import { Test } from '../../../types/test'

type AppContextType = {
  organisation: OrganisationType
  testCases: Test[]
  error: string
  getOrganisation: (name: string) => Promise<void>
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
  const [error, setError] = useState<string>()
  const navigate = useNavigate()

  const getOrganisation = async (name: string) => {
    try {
      const res = await fetch(`/api/organisation/${name}`)
      if (res.status === 404) {
        return undefined
      } else {
        const json = await res.json()
        return json
      }
    } catch (e) {
      throw new Error('Organisation not found')
    }
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

  const handleLogin = async (name: string) => {
    try {
      const org = await getOrganisation(name)
      if (!org) {
        setError('Organisation not found. Try Google 😉')
      } else {
        setOrganisation(org)
        setIsLoggedIn(true)
        setError(undefined)
      }
    } catch (e) {
      console.log(e, '!!!!')
    }
  }

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
    else navigate('/home')
  }, [isLoggedIn])

  return (
    <AppContext.Provider
      value={{
        organisation,
        error,
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
