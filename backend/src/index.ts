import express = require('express')
import mongoose from 'mongoose'
import { checkDbAndSeed } from '../mocks/seeds'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/projects.router'
import { milestoneRouter } from './routes/milestone/milestones.router'
import { testRouter } from './routes/testCases/tests.router'
import { organisationRouter } from './routes/organisation/organisation.router'
import { testGroupRouter } from './routes/testGroups/testGroups.router'

const app = express()
const PORT = 4000

checkDbAndSeed()

console.log(process.env.MONGODB_URL)

mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/testTracker')
  .then(() => console.log('Connected to the mongo!'))
  .catch((e) => console.log(e))

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)
app.use('/organisation', organisationRouter)
app.use('/user', userRouter)
app.use('/projects', projectRouter)
app.use('/milestones', milestoneRouter)
app.use('/testCase', testRouter)
app.use('/testGroups', testGroupRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
