import * as express from 'express'
import { createTest, updateTestStatus } from './tests.controller'
export const testRouter = express.Router()

testRouter.post('/', createTest)
testRouter.post('/status', updateTestStatus)
