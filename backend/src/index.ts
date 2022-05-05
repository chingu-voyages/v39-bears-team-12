import express = require('express')
import mongoose from 'mongoose'
import dotenv from "dotenv"

import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/projects.router'
import { milestoneRouter } from './routes/milestone/milestones.router'
import { testRouter } from './routes/tests/tests.router'
import { organisationRouter } from './routes/organisation/organisation.router'

dotenv.config()

const app = express()
const PORT = 4000 

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/testTracker')

app.use('/organisations', organisationRouter)
app.use('/users', userRouter)
app.use('/projects', projectRouter)
app.use('/milestones', milestoneRouter)
app.use('/testCases', testRouter)


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
