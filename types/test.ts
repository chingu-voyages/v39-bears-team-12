export type Test = {
  id: string
  name: string
  description?: string
  prerequisites?: string
  steps?: string
  expected?: string
  status: TStatus
}

export type TStatus = 'passed' | 'failed' | 'pending'
