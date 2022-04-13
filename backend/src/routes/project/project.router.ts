import { createProject, getProjectById } from "./projects.controller";
import * as express from 'express'

export const projectRouter = express.Router()

projectRouter.post('/new', createProject)
projectRouter.get('/:id', getProjectById)
