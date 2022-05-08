import { Request, Response } from 'express'
import Organisation from '../../models/organisations.model'

export async function getOrganisationByName(req: Request, res: Response) {
  const { name } = req.params

  const organisation = await Organisation.findOne({ name })
  if (organisation) return res.send(organisation)
  res.status(404).send({ error: 'Organisation not found' })
}

// export async function updateOrganisation(req:Request, res:Response) {
//   const { id } = req.params
//   const updates = req.body
//   const data = await Organisation.findByIdAndUpdate(id, updates)
//   res.send(data)
// }
