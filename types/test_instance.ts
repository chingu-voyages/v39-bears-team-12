export type TestInstance = {
  id: string
  testId: string
  note?: string
  status: 'pass' | 'fail' | 'pending' | 'blocked' | 'retest'
}
