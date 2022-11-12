import {Router} from 'express'
import init from '../controllers/init.controller'

const router = Router()

router.get("/init",init.information)
router.get('/error',init.information2)

export default router

