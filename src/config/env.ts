import dotenv from 'dotenv'
dotenv.config({
    path:require('path')
		.join(__dirname,'..','..','.env')
})

export default {
	PORT:process.env.PORT,
}