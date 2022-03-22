import express, { Response, NextFunction } from "express";
import Request from "./types/Request";
import HttpStatusCodes from "http-status-codes";
import userRouter from "./routes/api/user";
import newsRouter from "./routes/api/news";
import rateLimit from './middleware/rateLimit'
import cors from 'cors'

const app = express();

// 1) GLOBAL MIDDLEWARES
// Access-Control-Allow-Origin *
app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json())

// Routes
app.use('/api/user', userRouter)
app.use('/api/news', rateLimit, newsRouter)

// No route matched, 404 not found
app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(HttpStatusCodes.BAD_REQUEST).send(`${req.originalUrl} is not exist`)
})

const PORT = 3000
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))