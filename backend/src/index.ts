import express = require('express')

const app = express()
const PORT = 4000

app.get('/', (_, response) => {
  response.send('Hello from Bears 12 🐻')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
