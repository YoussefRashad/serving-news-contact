import express, { Response, NextFunction } from "express";

const app = express();
// Main middleware
app.use(express.json())


const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))