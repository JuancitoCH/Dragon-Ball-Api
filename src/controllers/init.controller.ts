import {Request,Response,Express,Router, NextFunction} from 'express'
import { StatusError } from '../errors/StatusError'
import { Response_Format } from '../helpers/response.forms'

const init={
    information(req:Request,res:Response){
        Response_Format.Html(res,"asd")
    },
    information2(req:Request,res:Response,next:NextFunction){
        try{
            throw new StatusError("Error Test",400)
        }catch(e){ next(e) }
    },
    information3(req:Request,res:Response,next:NextFunction){

    },
}

export default init