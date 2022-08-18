import { Response, Request } from 'express'


export const home = (req:Request, res:Response) => {
    res.render('pages/animal')
}

export const dogs = (req:Request, res:Response) => {
    res.render('pages/animal')
}

export const cats = (req:Request, res:Response) => {
    res.render('pages/animal')
}

export const fishes = (req:Request, res:Response) => {
    res.render('pages/animal')
}
