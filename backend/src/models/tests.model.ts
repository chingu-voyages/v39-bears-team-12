import { Schema, model } from 'mongoose'

const testSchema = new Schema({
  name: String,
  description: String,
  status: String,
  steps: [],
  expected: [],
  prerequisite: [],
})

const Test = model('Test', testSchema)

export default Test
