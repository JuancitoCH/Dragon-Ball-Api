import {Router} from 'express'
import Characters_Controller from '../controllers/characters.controller'


const router = Router()

router.get("/",Characters_Controller.getAll)
router.post("/",Characters_Controller.createCharacter)

export default router