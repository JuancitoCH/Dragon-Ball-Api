import {Response} from 'express'
import { StatusError } from '../errors/StatusError'
enum Status{
    OK=200,
    NotFound=404,
    ServerError=500,
    Create=201,
}


const Response_Format = {
    OK(res:Response,data:any){
        return res.status(Status.OK).json(data)
    },
    serverError(res:Response,data:any){
        throw new StatusError("Server Error",Status.ServerError)
    },
    Create(res:Response,data:any){
        return res.status(Status.Create).json(data)
    },
    NotFound(res:Response){
        return res.status(Status.NotFound).json({
            success:false,
            message:"Route Not Found"
        })
    },
    Html(res:Response,content:any){
        return res.status(Status.OK).send(
            `<h1>Hola</h1>`
        )
    }
}

export {
    Status,
    Response_Format
}