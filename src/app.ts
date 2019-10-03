import { server } from './server'

const port = 3000

server.listen(port, () => {
  console.clear()
  console.log(`Now listening on http://localhost:${port}`)
})
