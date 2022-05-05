import mongoose, { Schema, model, mongo } from "mongoose";
import User from './users.model'

interface IUser {
    name: string
    description: string
    users: object
    projects: object
}

const organisatonSchema = new Schema({
    name: String,
    description: String,
    users: Array,
    projects: Object
})

const Organisation = model('Organisation', organisatonSchema)

export default Organisation