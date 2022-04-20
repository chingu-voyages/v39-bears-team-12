import { Request, Response } from "express";
export function createProject( req: Request, res: Response ){
    res.send('Create Project form')
}
export function getProjectById(req:Request, res:Response){
    res.send('This is a get request to all your project from db after logging in')
}