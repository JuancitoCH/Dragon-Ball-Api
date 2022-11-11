import express,{Request,Response,Express} from 'express'
import error_handler from './libs/express/middleware/error'
import notfound_handler from './libs/express/middleware/notfound'
import init from './routes/init.routes'
const app:Express = express()
const PORT = 4000

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    return res.status(200).json({
        success:true,
        message:"Working"
    })
})

// ROUTES
app.use(init)


// ERROR HANDLER
app.use(notfound_handler)
app.use(error_handler)


app.listen(PORT,()=>{
    console.log("- 🐸 [Server] Listen on Port: "+PORT)
})