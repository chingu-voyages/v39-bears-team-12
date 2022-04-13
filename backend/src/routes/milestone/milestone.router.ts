import * as express from 'express'
import { createMilestone, getMilestoneById } from './milestone.controller'

export const milestoneRouter = express.Router()

milestoneRouter.post('/', createMilestone)
milestoneRouter.get('/:id', getMilestoneById)
