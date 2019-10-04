import express, { Application, Request, Response } from 'express'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json')

export const server: Application = express()

server.get('/', (req: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
        html, body { width: 100%; height: 100%; margin: 0; font-family: sans-serif; }
        body { display: flex; flex-flow: column nowrap; justify-content: center; align-items: center; }
      </style>
    </head>
    <body>
      <h2>Node-TS-Docker Server</h2>
      <p>Version ${pkg.version}</p>
    </body>
  </html>
  `)
})
