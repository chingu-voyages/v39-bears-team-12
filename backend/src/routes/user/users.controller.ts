import { Request, Response } from 'express'
export function getUser(req: Request, res: Response) {
  // This function retrieve user data from database and the project
  return res.send('Hello User')
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
