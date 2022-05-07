import express = require('express')
import mongoose from 'mongoose'
import { checkDbAndSeed } from '../mocks/seeds'

import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/projects.router'
import { milestoneRouter } from './routes/milestone/milestones.router'
import { testRouter } from './routes/tests/tests.router'
import { organisationRouter } from './routes/organisation/organisation.router'

const app = express()
const PORT = 4000

checkDbAndSeed()

mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/testTracker')
  .then(() => console.log('Connected to the mongo!'))
  .catch((e) => console.log(e))

app.use('/organisation', organisationRouter)
app.use('/user', userRouter)
app.use('/projects', projectRouter)
app.use('/milestones', milestoneRouter)
app.use('/testCases', testRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
