import { Response, Request } from 'express'
import { Pet } from '../models/Pet'

export const home = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Todos os animais',
            background__path: 'allanimals.jpg'
        },
        allActive: 'active',
        petData: Pet.getAll()
    })
}

export const dogs = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Cachorros',
            background__path: 'banner_dog.jpg'
        },
        dogActive: 'active',
        petData: Pet.getByAnimal('dog')
    })
}

export const cats = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Gatos',
            background__path: 'banner_cat.jpg'
        },
        catActive: 'active',
        petData: Pet.getByAnimal('cat')
    })
}

export const fishes = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Peixes',
            background__path: 'banner_fish.jpg'
        },
        fishActive: 'active',
        petData: Pet.getByAnimal('fish')
        
    })
}
