import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Organisation as OrganisationType } from '../../../types/organisation'
import { Test } from '../../../types/test'

type AppContextType = {
  organisation: OrganisationType
  error: string
  getOrganisation: (name: string) => Promise<void>
  createOrganisation: (name: string) => Promise<void>
  updateOrganisation: (updates: Partial<OrganisationType>) => void
  // getTestCases: () => void
  handleLogOut: () => void
  handleLogin: (id: string) => void
  createTestCase: (testCase: Test) => void
}

export const AppContext = createContext({} as AppContextType)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [organisation, setOrganisation] = useState<OrganisationType>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState<string>()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setError(undefined)
  }, [location])

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

  const createOrganisation = async (organisation: string) => {
    const res = await fetch('/api/organisation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organisation }),
    })
    const json = await res.json()
    console.log(json)
    if (!json.success) {
      setError(json.message)
      return
    }
    setOrganisation(json.data)
    navigate('/home')
  }

  // const getTestCases = async () => {
  //   if (organisation) {
  //     const res = await fetch(`/api/testCases/${organisation.id}`)
  //     const json = await res.json()
  //   }
  // }

  const createTestCase = async ({ name, description, id }: Test) => {
    const res = await fetch('/api/testCase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, testId: id, orgId: organisation.id }),
    })
    const json = await res.json()
    if (!json.success) {
      setError(json.message)
    } else {
      setOrganisation((org) => ({ ...org, testCases: [...org.testCases, json.data as Test] }))
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
        setError('Organisation not found')
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
        createOrganisation,
        updateOrganisation,
        // testCases,
        // getTestCases,
        handleLogOut,
        handleLogin,
        createTestCase,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
