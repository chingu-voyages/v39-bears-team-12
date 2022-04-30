import React, { useState } from 'react'
import { Status, TStatus } from '../components/Status'

export const ComponentExamples = () => {
  const [statuses, setStatuses] = useState(['passed', 'failed', 'pending'])
  return (
    <>
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
