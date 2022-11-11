import {Router} from 'express'
import init from '../controllers/init.controller'

const router = Router()

router.use("/init",init.information)
router.get('/')

export default router

