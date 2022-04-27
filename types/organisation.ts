import { User } from './user'
import { Project } from './project'

export type Organisation = {
  name: string
  description?: string
  id: string
  users: User[]
  projects: Project[]
}
