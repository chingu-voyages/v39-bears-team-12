import * as express from 'express'
export const userRouter = express.Router()

import {
  getUser,
  registerUser,
  userRegisterPage,
  userLoginPage,
  loginUser,
} from './users.controller'

userRouter.get('/', getUser)
userRouter.route('/register').get(userRegisterPage).post(registerUser)
userRouter.route('/login').get(userLoginPage).post(loginUser)
