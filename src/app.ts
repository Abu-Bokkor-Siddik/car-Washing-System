import config from "./app/config"
import cors from 'cors';
import express, { Request, Response } from 'express'
import { userRouter } from "./app/modules/user/user.route";
const app = express()
app.use(express.json());
app.use(cors());
// app
app.use('/app',userRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
console.log(config.port,'port here');

 export default app