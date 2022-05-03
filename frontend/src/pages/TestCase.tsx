import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { AppContext } from '../contexts'
const TestCases = () => {
  const { getTestCases, testCases } = useContext(AppContext)

  useEffect(() => {
    getTestCases()
  }, [])

  if (testCases)
    return testCases.map((testCase) => (
      <Card title={testCase.name} subtitle={testCase.description}>
        <Card title="Prerequisites">{testCase.prerequisites}</Card>
        <Card title="Steps">{testCase.steps}</Card>
        <Card title="Expected result">{testCase.expected}</Card>
      </Card>
    ))
  return null
}

export default TestCases
