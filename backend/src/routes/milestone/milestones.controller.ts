import { Request, Response } from 'express'
export function createMilestone(req: Request, res: Response) {
  res.send(
    'Create a new milestone and push to array in the of milstone in db and possible return the array'
  )
}
export function getMilestoneById(req: Request, res: Response) {
  res.send('get milestone data by id, including test groups and tests')
}
