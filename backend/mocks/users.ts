import { User } from '../../types/user'

export const mock_users: User[] = [
  { id: '1', name: 'Fouad', role: 'manager', organisation: { id: '1', name: 'Google' } },
  { id: '2', name: 'Primo', role: 'developer', organisation: { id: '1', name: 'Google' } },
  { id: '3', name: 'Davor', role: 'QA', organisation: { id: '1', name: 'Google' } },
]
