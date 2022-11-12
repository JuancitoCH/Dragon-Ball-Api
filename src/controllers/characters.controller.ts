import {Request,Response,Router, NextFunction} from 'express'
import { Response_Format } from '../helpers/response.forms'
import Character from  '../interfaces/character.interface'

const Characters_Controller={
    getAll(req:Request,res:Response,next:NextFunction){
        try{
            const object:Character={
                name:"kokun",
                images:["a"],
                raze:"Saiyayin",
                nacimiento:"21/03/1985"
            }
            Response_Format.OK(res,object)
        }catch(e){
            next(e)
        }
    },
}

export default Characters_Controller