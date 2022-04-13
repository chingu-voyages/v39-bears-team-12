import * as express from 'express'
import { createMilestone, getMilestoneById } from './milestones.controller'

export const milestoneRouter = express.Router()

milestoneRouter.post('/', createMilestone)
milestoneRouter.get('/:id', getMilestoneById)
