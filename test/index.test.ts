import request from 'supertest'
import { server } from '../src/server'

test('index', () => request(server)
  .get('/')
  .expect(200)
  .expect({ message: 'Express server running.' })
)