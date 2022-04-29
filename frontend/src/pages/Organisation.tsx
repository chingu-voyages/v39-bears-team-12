import React, { useEffect, useState } from 'react'
import { Organisation as OrganisationType } from '../../../types/organisation'
import { Status, TStatus } from '../components/Status'

export const Organisation = () => {
  const [organisation, setOrganisation] = useState<OrganisationType>()
  const getData = async () => {
    const res = await fetch('/api/organisation/1')
    const json = await res.json()
    setOrganisation(json)
  }
  const [statuses, setStatuses] = useState(['passed', 'failed', 'pending'])
  useEffect(() => {
    getData()
  }, [])

  if (organisation) {
    return (
      <>
        <div>Name:</div>
        <div className="text-xl  font-bold ml-2">{organisation.name}</div>
        <h2>{organisation.description}</h2>
        <div>Users</div>
        {organisation.users.map((user) => (
          <h3 className="ml-2 font-bold text-xl" key={user.id}>
            {user.name}
          </h3>
        ))}
        {statuses.map((status, index) => (
          <div className="mb-1">
            <Status
              key={index}
              status={status as TStatus}
              onUpdate={(newStatus) =>
                setStatuses((statuses) => statuses.map((s, i) => (i === index ? newStatus : s)))
              }
            />
          </div>
        ))}
      </>
    )
  }
  return null
}
