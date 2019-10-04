import express, { Application, Request, Response } from 'express'

export const server: Application = express()

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express server running in its container.' })
})
