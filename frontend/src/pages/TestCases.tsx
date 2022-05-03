import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../components/Card'
import { AppContext } from '../contexts'
const TestCases = () => {
  const { getTestCases, testCases } = useContext(AppContext)

  useEffect(() => {
    getTestCases()
  }, [])

  if (testCases)
    return (
      <>
        {testCases.map((testCase) => (
          <Link to={testCase.id} key={testCase.id}>
            <Card title={testCase.name} />
          </Link>
        ))}
        <Outlet />
      </>
    )
  return null
}

export default TestCases
