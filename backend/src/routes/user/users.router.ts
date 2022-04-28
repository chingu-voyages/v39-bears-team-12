import * as express from 'express'
export const userRouter = express.Router()

import {
  getUserById,
  registerUser,
  userRegisterPage,
  userLoginPage,
  loginUser,
} from './users.controller'

userRouter.get('/:id', getUserById)
userRouter.route('/register').get(userRegisterPage).post(registerUser)
userRouter.route('/login').get(userLoginPage).post(loginUser)
