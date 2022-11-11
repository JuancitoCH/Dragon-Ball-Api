import {Request,Response,Express,Router, NextFunction} from 'express'
import { Response_Format } from '../helpers/response.forms'

const init={
    information(req:Request,res:Response){
        Response_Format.Html(res,"asd")
    },
    information2(req:Request,res:Response,next:NextFunction){

    },
    information3(req:Request,res:Response,next:NextFunction){

    },
}

export default init