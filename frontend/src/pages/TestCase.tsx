import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Test } from '../../../types/test'
import Card from '../components/Card'
import { AppContext } from '../contexts'
const TestCase = () => {
  const { id } = useParams()
  const { testCases } = useContext(AppContext)
  const [selectedTestCase, setSelectedTestCase] = useState<Test>()
  useEffect(() => setSelectedTestCase(testCases.find((t) => t.id === id)), [])
  if (selectedTestCase)
    return (
      <>
        <Card title={selectedTestCase.name} subtitle={selectedTestCase.description}>
          <Card title="Prerequisites">{selectedTestCase.prerequisites}</Card>
          <Card title="Steps">{selectedTestCase.steps}</Card>
          <Card title="Expected result">{selectedTestCase.expected}</Card>
        </Card>
      </>
    )
  return null
}

export default TestCase
