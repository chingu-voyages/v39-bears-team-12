import { Organisation } from '../types/organisation'
import { users } from './users'
import { projects } from './projects'

export const organisations_mock: Organisation[] = [
  {
    id: '1',
    name: 'Google',
    description: undefined,
    users,
    projects,
  },
]
