export type User = {
  id: string
  name: string
  role: Role
}

type Role = 'developer' | 'manager' | 'engineer' | 'QA'
