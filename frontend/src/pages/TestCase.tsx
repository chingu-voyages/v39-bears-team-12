import React from 'react'
import Card from '../components/Card'
const TestCase = () => (
  <Card title="Test case" subtitle="Short description">
    <Card title="Prerequisites">You must have registered account with confirmed email address</Card>

    <Card title="Steps">
      1. go to the login page, 2. enter your credentials, 3. press login, first try with incorrect
      credentials, then with correct credentials
    </Card>
    <Card title="Expected result">
      If credentials are incorrect, you should see message about it. If credentials are correct you
      should be redirected to the dashboard.
    </Card>
  </Card>
)

export default TestCase
