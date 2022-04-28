import { Request, Response } from 'express'
import { mock_tests } from '../../../mocks/test'

export function createTest(req: Request, res: Response) {
  res.send('create new test')
}

export function getTestById(req: Request, res: Response) {
  const { id } = req.params
  const test = mock_tests.find((test) => test.id === id)
  if (test) return res.send(JSON.stringify(test))

  res.send('test not found')
}
