import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  role: string
  organization: string
}

const userSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String },
  email: { type: String },
  organisation: { type: String },
})

const User = model('User', userSchema)

export default User
