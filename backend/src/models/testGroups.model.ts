import { Schema, model } from 'mongoose'

const testGroupSchema = new Schema({
  name: String,
  description: String,
  tests: Array
})

const TestGroup = model('TestGroup', testGroupSchema)

export default TestGroup
