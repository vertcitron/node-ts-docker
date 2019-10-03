import express, { Application, NextFunction, Request, Response } from 'express'

export const server: Application = express()

server.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Express server running.' })
})
