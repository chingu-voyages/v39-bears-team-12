import * as express from 'express'
import { getOrganisationByName } from './organisation.controller'

export const organisationRouter = express.Router()

organisationRouter.get('/:name', getOrganisationByName)
