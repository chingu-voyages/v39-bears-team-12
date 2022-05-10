import { User } from './user'
import { Project } from './project'
import { Test } from './test'

export type Organisation = {
  name: string
  description?: string
  id: string
  users: User[]
  projects: Project[]
  testCases: Test[]
}
