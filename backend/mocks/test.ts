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
    status: 'passed',
  },
  {
    id: '2',
    name: 'Test random',
    description: 'Some random test',
    steps: ' Press random buttons on keyboard',
    expected: ' App should be a mess',
    prerequisites: 'You must have keyboard',
    status: 'pending',
  },
]

export const mock_tests: { [key: string]: Test[] } = {
  '1': Tests1,
}
