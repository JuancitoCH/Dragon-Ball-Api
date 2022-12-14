import { StatusError } from "../../../errors/StatusError"
import {Request,Response,NextFunction} from 'express'
import PrismaErrorManage from "../../Prisma/error";

export default (error:StatusError,req:Request,res:Response,next:NextFunction)=>{
    PrismaErrorManage(error)
    const status = error.status ?? 500;
	const message = error.message ?? 'Internal server error';
    // console.log(error)
	return res.status(status).json({ 
            status,
            success:false,
            error:{
                message,
            }
        });
}