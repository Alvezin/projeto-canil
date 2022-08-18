import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import mainRoutes from './routes/index'

const server = express()
dotenv.config()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.set('engine', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)
//rotas

server.use((req:Request, res:Response) => {
    res.send('Página não encontrada')
})
server.listen(process.env.PORT)