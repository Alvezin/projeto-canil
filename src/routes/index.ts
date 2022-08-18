import { Router } from 'express'

import * as PageController from '../controllers/mainController'
import * as searchController from '../controllers/searchController'

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)




router.get('/search', searchController.searchGet)



export default router