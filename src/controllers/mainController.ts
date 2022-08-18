import { Response, Request } from 'express'


export const home = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Todos os animais',
            background__path: 'allanimals.jpg'
        },
        allActive: 'active'
    })
}

export const dogs = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Cachorros',
            background__path: 'banner_dog.jpg'
        },
        dogActive: 'active'
    })
}

export const cats = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Gatos',
            background__path: 'banner_cat.jpg'
        },
        catActive: 'active'
    })
}

export const fishes = (req:Request, res:Response) => {
    res.render('pages/animal', {
        banner:{
            title: 'Peixes',
            background__path: 'banner_fish.jpg'
        },
        fishActive: 'active'
        
    })
}
