import { Test } from '../../types/test'

const Tests1: Test[] = [
  {
    id: '1',
    name: 'Super duper test',
    description: 'My super duper test',
    steps:
      ' 1. go to the login page, 2. enter your credentials, 3. press login, first try with incorrect credentials, then with correct credentials',
    expected:
      ' If credentials are incorrect, you should see message about it. If credentials are correct you should be redirected to the dashboard.',
    prerequisites: 'You must have registered account with confirmed email address',
  },
]

export const mock_tests: { [key: string]: Test[] } = {
  '1': Tests1,
}
