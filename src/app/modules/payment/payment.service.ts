/* eslint-disable prefer-const */
/* eslint-disable no-undef */

import { join } from 'path';
import { BookingModels } from '../booking/booking.model';
import { verifyPayment } from './payment.utils';
import { readFileSync } from 'fs';

const confirmationService = async (transactionId: string,status:string) => {
  const verifyRes = await verifyPayment(transactionId as string);
  console.log(verifyRes, 'verify');
  let result;
  let message: string | undefined;
  if (verifyRes && verifyRes.pay_status === 'Successful') {
    result = await BookingModels.findOneAndUpdate(
      {
        transactionId,
      },
      { isBooked: 'booked' }
    );
    message='Successfully paid'
  }else{
    message="Payment failed"
  }
const filePath =join(__dirname,'../../../views/confirmation.html')
let template =readFileSync(filePath,'utf-8')
// 
template=template.replace(`{{message}}`,message as string)
// console.log({template},'template')
console.log(message)
  return template;
};

export const paymentService = {
  confirmationService,
};
