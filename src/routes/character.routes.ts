import {Router} from 'express'
import Characters_Controller from '../controllers/characters.controller'


const router = Router()

router.get("/",Characters_Controller.getAll)

export default router