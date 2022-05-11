import * as express from 'express'
import { createTest, getTestsByOrgId } from './tests.controller'
export const testRouter = express.Router()

testRouter.post('/', createTest)
testRouter.get('/:id', getTestsByOrgId)
