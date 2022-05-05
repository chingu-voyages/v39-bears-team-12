import {
    Schema, model
} from 'mongoose'

interface IUser {
    name: string
    description: string
    steps: any
    expected: any
    prerequisites: any
}

const testSchema = new Schema({
    name: String,
    description: String,
    steps: [],
    expected: [],
    prerequisite: []
})

const Test = model('Test', testSchema)

export default Test