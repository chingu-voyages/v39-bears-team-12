import { User } from './user'
import { Project } from './project'
import { Test } from './test'

export type Organisation = {
  _id: string
  name: string
  description?: string
  users: User[]
  projects: Project[]
  testCases: Test[]
}
