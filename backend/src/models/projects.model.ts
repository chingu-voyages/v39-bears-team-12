import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  description: string
}

const projectSchema = new Schema({
  name: String,
  description: String,
})

const Project = model('Project', projectSchema)

export default Project
