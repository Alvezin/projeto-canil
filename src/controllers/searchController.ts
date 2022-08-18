import { Request, Response } from 'express'
import { Pet } from '../models/Pet'

export const searchGet = (req:Request, res:Response) => {
    const queryString = req.query.q as string
    if(!queryString){
        res.redirect('/')
        return
    }
    const list  = Pet.getByName(queryString)

    res.render('pages/animal', {
        petData: list,
        q: queryString
    })

}