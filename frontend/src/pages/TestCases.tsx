import React, { useContext } from 'react'
import { Button } from '../components/Button'
import Card from '../components/Card'
import { CreateTest } from '../components/createTest'
import { Status } from '../components/Status'
import { AppContext } from '../contexts'
const TestCases = () => {
  const { organisation, updateTestCaseStatus, refreshOrg } = useContext(AppContext)

  if (organisation) {
    return (
      <div>
        <div>Test cases</div>
        {!organisation?.testCases.length ? (
          <div>No test cases found</div>
        ) : (
          organisation.testCases.map((testCase, i) => (
            <Card key={i} title={testCase.name} subtitle={testCase.description}>
              <Status
                status={testCase.status}
                onUpdate={async (status) => {
                  await updateTestCaseStatus({ id: testCase.id, status })
                }}
              />
            </Card>
          ))
        )}
        <div className="mt-3 flex gap-2">
          <CreateTest />
          <Button onClick={async () => await refreshOrg()}>Refresh</Button>
        </div>
      </div>
    )
  }
  return null
}

export default TestCases
