import { Request, Response } from 'express'
import Organisation from '../../models/organisations.model'
import { mock_tests } from '../../../mocks/test'
import { Test } from '../../../../types/test'

export async function createTest(req: Request, res: Response) {
  const organisation = await Organisation.findOne({ id: req.body.orgId })
  if (organisation) {
    console.log(`Adding new test case to organisation: ${organisation.name}`)
    const testCase = {
      id: req.body.testId,
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    }
    await Organisation.updateOne({
      id: organisation.id,
      testCases: [...organisation.testCases, testCase],
    })
    res.send({ success: true, data: testCase })
  } else {
    res.status(501).send({ success: false, message: 'Unable to create a new test case' })
  }
}

export const updateTestStatus = async (req: Request, res: Response) => {
  const organisation = await Organisation.findOne({ id: req.body.orgId })

  if (organisation) {
    console.log(`updating test status for test id ${req.body.id}`)

    const match = organisation.testCases.find((testCase: Test) => testCase.id === req.body.id)
    const updated = organisation.testCases.map((testCase: Test) =>
      testCase.id === req.body.id ? { ...match, status: req.body.status } : testCase
    )

    await Organisation.updateOne({
      id: organisation.id,
      testCases: updated,
    })

    res.send({
      success: true,
      data: { ...match, status: req.body.status },
      message: `Updated test: ${match.id}`,
    })
  } else {
    res.status(501).send({ success: false, message: 'Unable to create a new test case' })
  }
}

export const getTestsByOrgId = (req: Request, res: Response) => {
  const { id } = req.params
  const tests = mock_tests[id]
  if (tests) return res.send(JSON.stringify(tests))

  res.send('test not found')
}
