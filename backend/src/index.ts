import express = require('express')
import { userRouter } from './routes/user/users.router'
import { projectRouter } from './routes/project/project.router'


const app = express()
const PORT = 4000

app.use('/users', userRouter)
app.use('/projects', projectRouter)



app.get('/', (_, response) => {
  response.send('Hello from Bears 12 🐻')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
