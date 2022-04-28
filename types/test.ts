export type Test = {
  id: string
  name: string
  description?: string
  prerequisites?: string
  steps?: string[]
  expected?: string
  status: 'pass' | 'fail' | 'pending' | 'blocked' | 'retest'
}
