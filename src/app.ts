import express, { Response, NextFunction } from "express";
import Request from "./types/Request";
import HttpStatusCodes from "http-status-codes";
import userRouter from "./routes/api/user";

const app = express();
// Main middleware
app.use(express.json())

// Routes
app.use('/api/user', userRouter)

// No route matched, 404 not found
app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(HttpStatusCodes.BAD_REQUEST).send(`${req.originalUrl} is not exist`)
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))