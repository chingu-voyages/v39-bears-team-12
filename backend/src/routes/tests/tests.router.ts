import * as express from 'express'
import { createTest, getTestById } from './tests.controller'
export const testRouter = express.Router()

testRouter.post('/', createTest)
testRouter.get('/:id', getTestById)
