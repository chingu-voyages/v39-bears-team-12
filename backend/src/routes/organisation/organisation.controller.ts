import { Request, Response } from 'express'
import Organisation from '../../models/organisations.model'

export async function getOrganisationByName(req: Request, res: Response) {
  const { name } = req.params

  const organisation = await Organisation.findOne({ name })
  if (organisation) return res.send(organisation)
  res.status(404).send({ error: 'Organisation not found' })
}

export async function createOrganisation(req: Request, res: Response) {
  const organisation = req.body.organisation
  const existing = await Organisation.find({ name: organisation })
  if (existing.length > 0) {
    return res.send({ success: false, message: 'Organisation already exists' })
  }

  console.log(`Adding new organisation: ${organisation}`)
  const created = await Organisation.create({
    name: organisation,
    description: '',
    users: [],
    projects: [],
    testCases: [],
  })
  return res.send({ success: true, data: created, message: 'Organisation created' })
}

// export async function updateOrganisation(req:Request, res:Response) {
//   const { id } = req.params
//   const updates = req.body
//   const data = await Organisation.findByIdAndUpdate(id, updates)
//   res.send(data)
// }
