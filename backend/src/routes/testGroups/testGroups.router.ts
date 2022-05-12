import * as express from 'express'
import { createTestGroups } from './testGroups.controller'
export const testGroupRouter = express.Router()

testGroupRouter.post('/', createTestGroups)



