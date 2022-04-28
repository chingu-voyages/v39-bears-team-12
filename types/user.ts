export type User = {
  id: string
  name: string
  role: Role
  organisation: { id: string; name: string }
}

type Role = 'developer' | 'manager' | 'engineer' | 'QA'
