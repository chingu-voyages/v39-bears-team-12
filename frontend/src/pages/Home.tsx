import React, { useContext, useEffect, useState } from 'react'
import { Test } from '@test-tracker/types/test'
import { AppContext } from '../contexts'

const colorMap: { [key: string]: string } = {
  failed: 'border-red-500 bg-red-100 ',
  passed: 'border-green-500 bg-green-100 ',
  pending: 'border-slate-500 bg-slate-100 ',
}

export const Home = () => {
  const { organisation } = useContext(AppContext)

  const [mappedTestCases, setMappedTestCases] = useState<{ [key: string]: Test[] }>()
  const [percentagePasseed, setPercentagePassed] = useState<number>()

  useEffect(() => {
    if (organisation?.testCases) {
      const mappedByStatus = organisation.testCases.reduce(
        (a: { [key: string]: Test[] }, c: Test) => {
          if (a[c.status]) {
            a[c.status].push(c)
          } else {
            a[c.status] = [c]
          }
          return a
        },
        {}
      )

      setPercentagePassed(() => {
        const passed = organisation.testCases.filter(({ status }) => status === 'passed').length
        const total = organisation.testCases.length

        return (passed / total) * 100
      })

      setMappedTestCases(mappedByStatus)
    }
  }, [organisation?.testCases])
  if (mappedTestCases)
    return (
      <div>
        <div className="mb-5">Overview</div>
        <div className="flex gap-2 mb-4 items-center">
          <div className="text-4xl border-4 font-semibold rounded-full p-5 border-green-500 bg-green-100 text-slate-700">
            {percentagePasseed.toFixed()}
            <span className="text-sm">% passed</span>
          </div>
        </div>
        {Object.entries(mappedTestCases).map(([status, tests]) => (
          <div
            className={`flex gap-2 font-semibold text-lg  p-3 rounded-full w-fit mb-2 ${colorMap[status]}`}
          >
            <div className="capitalize">{status}</div>
            <div>{tests.length}</div>
          </div>
        ))}
      </div>
    )
}
