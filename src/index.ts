import app from "./app"
import Prisma from './config/db'
import env from "./config/env"
const {PORT} = env

// const PORT = 4000

Prisma.$connect().then(()=>{
    app.listen(PORT,()=>{
        console.log("\n- 🐸 [Server] Listen on Port: http://localhost:"+PORT)
    })
}).catch((e:Error)=>{
    console.log("- 🛑 [Server] Error")
    console.error(e)
})

process.on('uncaughtException',async()=>{
    // Disconnect Prisma CLient
    await Prisma.$disconnect()
})