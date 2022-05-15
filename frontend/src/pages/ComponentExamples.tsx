import { TStatus } from '@test-tracker/types/test'
import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Status } from '../components/Status'

const StatusComponent = () => {
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

const ButtonComponents = () => (
  <>
    <Button styles="mb-2">Primary</Button>
    <Button styles="mb-2" Icon={<i className="fa-solid fa-atom animate-pulse"></i>}>
      Primary
    </Button>
    <Button variant="secondary">Secondary</Button>
  </>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-5">
    <h2 className="text-xl font-bold mb-3">{title}</h2>
    {children}
  </div>
)

export const ComponentExamples = () => (
  <div>
    <h2 className="text-md mb-3">Example components</h2>
    <Section title="Status">
      <StatusComponent />
    </Section>
    <Section title="Buttons">
      <ButtonComponents />
    </Section>
  </div>
)
