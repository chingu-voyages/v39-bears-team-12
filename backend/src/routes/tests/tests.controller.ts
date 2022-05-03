import { Request, Response } from 'express'
import { mock_tests } from '../../../mocks/test'

export function createTest(req: Request, res: Response) {
  res.send('create new test')
}

export const getTestsByOrgId = (req: Request, res: Response) => {
  const { id } = req.params
  const tests = mock_tests[id]
  if (tests) return res.send(JSON.stringify(tests))

  res.send('test not found')
}
