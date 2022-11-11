import { StatusError } from "../../../errors/StatusError"
import {Request,Response,NextFunction} from 'express'

export default (error:StatusError,req:Request,res:Response,next:NextFunction)=>{
    const status = error.status ?? 500;
	const message = error.message ?? 'Internal server error';
	return res.status(status).json({ 
            status,
            success:false,
            error:{
                message,
            }
        });
}