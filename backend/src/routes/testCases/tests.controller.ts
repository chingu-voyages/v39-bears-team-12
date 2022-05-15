import { Request, Response } from 'express'
import Organisation from '../../models/organisations.model'
import { Test } from '@test-tracker/types/test'

export async function createTest(req: Request, res: Response) {
  const organisation = await Organisation.findById(req.body.orgId)

  if (organisation) {
    const testCase = {
      id: req.body.testId,
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    }

    await Organisation.findByIdAndUpdate(
      {
        _id: organisation.id,
      },
      { $set: { testCases: [...organisation.testCases, testCase] } }
    )

    console.log(`Adding new test case to organisation: ${organisation.name}`)
    res.send({ success: true, data: testCase })
  } else {
    res.status(501).send({ success: false, message: 'Unable to create a new test case' })
  }
}

export const updateTestStatus = async (req: Request, res: Response) => {
  const organisation = await Organisation.findById(req.body.orgId)

  if (organisation) {
    console.log(`updating test status for test id ${req.body.id}`)

    const match = organisation.testCases.find((testCase: Test) => testCase.id === req.body.id)
    const updated = organisation.testCases.map((testCase: Test) =>
      testCase.id === req.body.id ? { ...match, status: req.body.status } : testCase
    )

    await Organisation.findByIdAndUpdate(
      {
        _id: organisation.id,
      },
      { $set: { testCases: updated } }
    )

    res.send({
      success: true,
      data: { ...match, status: req.body.status },
      message: `Updated test: ${match.id}`,
    })
  } else {
    res.status(501).send({ success: false, message: 'Unable to create a new test case' })
  }
}
