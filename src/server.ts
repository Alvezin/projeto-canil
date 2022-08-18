import express from 'express'
import dotenv from 'dotenv'
import mustacheExpress from 'mustache-express'

const server = express()
dotenv.config()

server.set('view engine', 'mustache')
server.set('engine', mustacheExpress())




server.listen(process.env.PORT)