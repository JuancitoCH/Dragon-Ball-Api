import {Request,Response} from 'express'
import { Response_Format } from '../../../helpers/response.forms'

export default (req:Request,res:Response)=>{
    Response_Format.NotFound(res)
}