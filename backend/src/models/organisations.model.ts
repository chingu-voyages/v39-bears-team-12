import { Schema, model } from 'mongoose'

const organisatonSchema = new Schema({
  name: String,
  description: String,
  users: Array,
  projects: Object,
})

const Organisation = model('Organisation', organisatonSchema)

export default Organisation
