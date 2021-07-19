import { Router } from 'express'
import ClientController from '../controllers/ClientController.js'

const controller = new ClientController()
const router = Router()

router.get('/', controller.listClients)

router.get('/:id', controller.findClient)

router.delete('/:id', controller.deleteClient)

router.post('/', controller.createClient)

export default router
