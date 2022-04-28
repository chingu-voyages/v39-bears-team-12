import express = require('express')
import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/projects.router'
import { milestoneRouter } from './routes/milestone/milestones.router'
import { testRouter } from './routes/tests/tests.router'
import { organisationRouter } from './routes/organisation/organisation.router'

const app = express()
const PORT = 4000

app.use('/organisation', organisationRouter)
app.use('/user', userRouter)
app.use('/projects', projectRouter)
app.use('/milestones', milestoneRouter)
app.use('/test', testRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
