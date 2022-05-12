import { Organisation } from '../../types/organisation'
import { mock_users } from './users'
import { projects } from './projects'

export const organisations_mock: Organisation[] = [
  {
    id: '1',
    name: 'Google',
    description: 'Mega Corporation with unlimited power',
    users: mock_users,
    projects,
    testCases: [],
  },
]
