import { StatusError } from '../errors/StatusError'
import { Status } from './response.forms'


const Error_throws = {
    validation(message:string,statusCode:number=Status.UserError){
        throw new StatusError(message,statusCode)
    }
}
export default Error_throws