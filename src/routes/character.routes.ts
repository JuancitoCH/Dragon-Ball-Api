import {Router} from 'express'
import Characters_Controller from '../controllers/characters.controller'
import auth_middleware from '../helpers/auth.middelware'


const router = Router()

router.get("/", Characters_Controller.getAll)
router.post("/", auth_middleware, Characters_Controller.createCharacter)
router.delete("/:idCharacter", auth_middleware, Characters_Controller.deleteCharacter)

export default router