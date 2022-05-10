import React, { useContext } from 'react'
import Card from '../components/Card'
import { CreateTest } from '../components/createTest'
import { AppContext } from '../contexts'
const TestCases = () => {
  const { organisation } = useContext(AppContext)

  return (
    <div>
      <div>Test cases</div>
      {!organisation.testCases.length ? (
        <div>No test cases found</div>
      ) : (
        organisation.testCases.map((testCase, i) => (
          <Card key={i} title={testCase.name} subtitle={testCase.description} />
        ))
      )}
      <div className="mt-3">
        <CreateTest />
      </div>
    </div>
  )
}

export default TestCases
