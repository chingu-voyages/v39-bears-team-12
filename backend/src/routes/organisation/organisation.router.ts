import * as express from 'express'
import { createOrganisation, getOrganisationByName } from './organisation.controller'

export const organisationRouter = express.Router()

organisationRouter.get('/:name', getOrganisationByName)
organisationRouter.post('/', createOrganisation)
