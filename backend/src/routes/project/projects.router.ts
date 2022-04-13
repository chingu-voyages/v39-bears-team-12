import { createProject, getProjectById } from './projects.controller'
import * as express from 'express'

export const projectRouter = express.Router()

projectRouter.post('/', createProject)
projectRouter.get('/:id', getProjectById)
