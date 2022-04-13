import { Request, Response } from 'express'
export function createTest(req: Request, res: Response) {
  res.send('create new test')
}
export function getTestById(req: Request, res: Response) {
  res.send('get test data by id')
}
