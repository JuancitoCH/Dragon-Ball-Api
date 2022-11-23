import { StatusError } from "../../errors/StatusError";
// Not in Use
export default function PrismaErrorManage(error:any){
    console.log(error)
    throw new StatusError("Server Error",500)
}