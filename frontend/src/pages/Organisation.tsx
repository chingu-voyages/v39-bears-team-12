import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { AppContext } from '../contexts'

export const Organisation = () => {
  const { id } = useParams()

  const { organisation, getOrganisation, updateOrganisation } = useContext(AppContext)

  const [organisationEdit, setOrganisationEdit] = useState(organisation)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdate = () => {
    setIsLoading(true)
    setTimeout(() => {
      updateOrganisation(organisationEdit)
      setIsLoading(false)
    }, 1500)
  }

  useEffect(() => {
    getOrganisation(id)
  }, [])

  useEffect(() => {
    setOrganisationEdit(organisation)
  }, [organisation])

  if (organisationEdit) {
    return (
      <>
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                autoFocus
                value={organisationEdit.name}
                onChange={(e) => setOrganisationEdit((org) => ({ ...org, name: e.target.value }))}
                className="ap border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <input
                value={organisationEdit.description}
                onChange={(e) =>
                  setOrganisationEdit((org) => ({ ...org, description: e.target.value }))
                }
                className="ap border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center justify-end">
              <Button variant="secondary" styles="mr-2">
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => handleUpdate()}
                Icon={
                  isLoading ? <i className="fa-solid fa-circle-notch animate-spin"></i> : undefined
                }
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </>
    )
  }
  return null
}
