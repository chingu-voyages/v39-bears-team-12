import { v4 as uuid } from 'uuid'
// import models
import User from '../src/models/users.model'
import Project from '../src/models/projects.model'
import Organisation from '../src/models/organisations.model'

async function seedDb() {
  await User.create({
    name: 'Davor',
    role: 'QA',
    organisation: 'Google',
  })
  await User.create({
    name: 'Fouad',
    role: 'Manager',
    organisation: 'Google',
  })
  await User.create({
    name: 'Primo',
    role: 'Developer',
    organisation: 'Google',
  })

  await Project.create({
    name: 'Project 1',
    description: 'A cool new test project',
  })

  await Organisation.create({
    name: 'Google',
    description: 'Mega Corporation with unlimited poop',
    users: [],
    projects: [],
    testCases: [
      {
        id: uuid(),
        name: 'Super duper test',
        description: 'My super duper test',
        steps: [
          'go to the login page',
          'enter your credentials',
          'press login',
          'first try with incorrect credentials',
          'then with correct credentials',
        ],
        expected: [
          'If credentials are incorrect, you should see message about it. If credentials are correct you should be redirected to the dashboard.',
        ],
        prerequisites: ['You must have registered account with confirmed email address'],
        status: 'passed',
      },
      {
        id: uuid(),
        name: 'Another Super duper test',
        description: 'My super duper test that failed :(',
        steps: [
          'go to the login page',
          'enter your credentials',
          'press login',
          'first try with incorrect credentials',
          'then with correct credentials',
        ],
        expected: [
          'If credentials are incorrect, you should see message about it. If credentials are correct you should be redirected to the dashboard.',
        ],
        prerequisites: ['You must have registered account with confirmed email address'],
        status: 'failed',
      },
    ],
  })
}

const checkIfAlreadySeeded = async () => {
  const res = await Organisation.find({})
  return res.length > 0
}

export const checkDbAndSeed = async () => {
  const isSeeded = await checkIfAlreadySeeded()
  if (!isSeeded) {
    await seedDb()
    console.log('db seeded!')
    return
  }
  console.log('db already seeded')
}
