import { Request, Response } from 'express'
import { organisations_mock } from '../../../mocks/organisation'
import Organisation from '../../models/organisations.model'

export function getOrganisationById(req: Request, res: Response) {
  const { id } = req.params
  const organisation = organisations_mock.find((org) => org.id === id)
  if (organisation) return res.send(JSON.stringify(organisation))

  res.send('organisation not found')
}

// export async function updateOrganisation(req:Request, res:Response) {
//   const { id } = req.params
//   const updates = req.body
//   const data = await Organisation.findByIdAndUpdate(id, updates)
//   res.send(data)
// }
