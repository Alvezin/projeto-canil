import data, { Animals, allAnimals } from "../data/animals" 

export const Pet = {
    getAll: ():Animals[] => {
        return data
    },
    getByAnimal: (animal:allAnimals):Animals[] => {
        return data.filter(item => {
            return item.type === animal
        })
    },
    getByName: (name:string):Animals[] => {
        return data.filter(item => {
            return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        })
    }
}