import * as express from 'express'
import { getOrganisationById } from './organisation.controller'

export const organisationRouter = express.Router()

organisationRouter.get('/:id', getOrganisationById)
