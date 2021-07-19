import { Router } from 'express'
import WishListController from '../controllers/WishlistController.js'

const controller = new WishListController()
const router = Router()

router.get('/', controller.listWishLists)

router.get('/:id', controller.findWishList)

router.delete('/:id', controller.deleteWishList)

router.post('/', controller.createWishList)

export default router
