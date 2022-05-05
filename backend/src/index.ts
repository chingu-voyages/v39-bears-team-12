import express = require('express')
import mongoose from 'mongoose'

import dotenv from "dotenv"
dotenv.config()

import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/projects.router'
import { milestoneRouter } from './routes/milestone/milestones.router'
import { testRouter } from './routes/tests/tests.router'
import { organisationRouter } from './routes/organisation/organisation.router'

// import models
import User from './models/users.model'
import Project from './models/projects.model'
import Organisation from './models/organisations.model'
import Test from './models/tests.model'

const app = express()
const PORT = 4000 

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/testTracker')

app.use('/organisation', organisationRouter)
app.use('/user', userRouter)
app.use('/projects', projectRouter)
app.use('/milestones', milestoneRouter)
app.use('/testCases', testRouter)

createMockData()

// Startup data for local db
async function createMockData() {
    const firstUser = await User.create({
        name: "Davor",
        role: "QA",
        organisation: 'Google'
    })
    const secondUser = await User.create({
        name: "Fouad",
        role: "Manager",
        organisation: 'Google'
    })
    const thirdUser = await User.create({
        name: "Primo",
        role: "Developer",
        organisation: 'Google'
    })

    const myProject = await Project.create({
        name: 'Project 1',
        description: 'A cool new test project'
    })

    const myOrganisation = await Organisation.create({
        name: 'Google',
        description: 'Mega Corporation with unlimited power',
        users: await User.find({ organisation:'Google' }),
        projects: await Project.find({})
    })

    const myTest = await Test.create({
        name: 'Super duper test',
        description: 'My super duper test',
        steps:
          ['go to the login page', 'enter your credentials', 'press login', 'first try with incorrect credentials', 'then with correct credentials'],
        expected:
          ['If credentials are incorrect, you should see message about it. If credentials are correct you should be redirected to the dashboard.'],
        prerequisites: ['You must have registered account with confirmed email address'],
    })

    return console.log('Data created successfully!')
    
}



app.listen(PORT, () => console.log(`server running on port ${PORT}`))
