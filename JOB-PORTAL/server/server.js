
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/webhooks.js'


//Initialize Express
const app = express()


//Middlewares
app.use(cors())
app.use(express.json())

//Database connection
await connectDB()

//Routes
app.get('/',(req,res)=> res.send("API Working"))
app.post('/webhooks',clerkWebhooks)


//Port
const port = process.env.PORT || 5000

//To run the backend
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })