import React, { createContext, useState } from 'react'
import { Organisation as OrganisationType } from '../../../types/organisation'

type AppContextType = {
  organisation: OrganisationType
  getOrganisation: (id: string) => Promise<void>
  updateOrganisation: (updates: Partial<OrganisationType>) => void
}

export const AppContext = createContext({} as AppContextType)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [organisation, setOrganisation] = useState<OrganisationType>()

  const getOrganisation = async (id: string) => {
    const res = await fetch(`/api/organisation/${id}`)
    const json = await res.json()
    setOrganisation(json)
  }

  const updateOrganisation = (updates: Partial<OrganisationType>) => {
    setOrganisation((org) => ({ ...org, ...updates }))
  }

  return (
    <AppContext.Provider value={{ organisation, getOrganisation, updateOrganisation }}>
      {children}
    </AppContext.Provider>
  )
}
