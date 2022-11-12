import express,{Request,Response,Express} from 'express'
import { Response_Format } from './helpers/response.forms'

import error_handler from './libs/express/middleware/error'
import notfound_handler from './libs/express/middleware/notfound'

import init from './routes/init.routes'
import character from './routes/character.routes'

const app:Express = express()
const PORT = 4000

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    Response_Format.OK(res,{
        success:true,
        message:"Working"
    })
})

// ROUTES
app.use(init)
app.use('/character',character)


// ERROR HANDLER
app.use(notfound_handler)
app.use(error_handler)


app.listen(PORT,()=>{
    console.log("\n- 🐸 [Server] Listen on Port: http://localhost:"+PORT)
})