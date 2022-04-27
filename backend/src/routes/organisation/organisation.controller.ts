import { Request, Response } from 'express'
import { organisations_mock } from '../../../mocks/organisation'

export function getOrganisationById(req: Request, res: Response) {
  const { id } = req.params
  const organisation = organisations_mock.find((org) => org.id === id)
  if (organisation) return res.send(JSON.stringify(organisation))

  res.send('organisation not found')
}
