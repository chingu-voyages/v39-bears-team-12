import { Request, Response } from 'express'
import { mock_users } from '../../../mocks/users'

export function getUserById(req: Request, res: Response) {
  const { id } = req.params
  const user = mock_users.find((usr) => usr.id === id)
  if (user) return res.send(JSON.stringify(user))

  res.send('organisation not found')
}

export function userRegisterPage(req: Request, res: Response) {
  return res.send('User Register page')
}

export function registerUser(req: Request, res: Response) {
  return res.send('Hey User You need to register')
}

export function userLoginPage(req: Request, res: Response) {
  return res.send('User Login Page')
}

export function loginUser(req: Request, res: Response) {
  return res.send('User Login Page')
}
