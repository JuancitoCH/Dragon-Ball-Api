import {Request,Response, NextFunction} from 'express'
import auth from 'basic-auth'
import Error_throws from './error.throws'
import env from '../config/env'
const {BASIC_KEY_PASSWORD,BASIC_KEY_USERNAME} = env

const auth_middleware=(req:Request,res:Response,next:NextFunction)=>{
    const user = auth(req)

    if(user){
        if(user.name == BASIC_KEY_USERNAME && user.pass == BASIC_KEY_PASSWORD) {
            return next()
        }
    }
    return Error_throws.validation("Invalid Auth Keys : Basic Auth must be provide")
}

export default auth_middleware