import { slotRoute } from './app/modules/slot/slot.route';

import config from "./app/config"
import cors from 'cors';
import express, {  Request, Response } from 'express'
import { userRouter } from "./app/modules/user/user.route";
import { LoginRouter } from "./app/modules/auth/auth.route";
import { serviceRouter } from "./app/modules/service/service.route";
import { globalErrorHandles } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/NotFound";
import { bookingRouter } from './app/modules/booking/booking.router';
const app = express()
app.use(express.json());
app.use(cors());
// app
app.use('/app',userRouter)
app.use('/app',LoginRouter)
app.use('/app',serviceRouter)
app.use('/app',slotRoute)
app.use('/app',bookingRouter)

app.get('/', (req:Request, res:Response,) => {
  res.send('Hello World!')
})
console.log(config.port,'port here');
// global error handle 
app.use(globalErrorHandles)
app.use(notFound)
 export default app

 