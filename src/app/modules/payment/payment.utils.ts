/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '../../config';

 export const startPayment = async (paymentData:any) => {
  console.log(paymentData.transactionId,'only id')
try {
  const res = await axios.post(config.payment_URL!, {
    store_id: config.store_id,
    tran_id: paymentData.transactionId,
    success_url: `http://localhost:3000/api/confirmation?transactionId=${paymentData.transactionId}&status=success`,
    fail_url: `http://localhost:3000/api/confirmation?status=faild`,
    cancel_url: 'http://localhost:5173/',
    amount: paymentData.amount,
    currency: 'BDT',
    signature_key: config.signature_key,
    desc: 'Merchant Registration Payment',
    cus_name: paymentData.customerName,
    cus_email: paymentData.customerEmail,
    cus_add1: 'House B-158 Road 22',
    cus_add2: 'Mohakhali DOHS',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1206',
    cus_country: 'Bangladesh',
    cus_phone: '+8801704434538',
    type: 'json',
  });
  return res.data;
} catch (error) {
  throw new Error("failed response")
}
//   console.log(res,'form payment')

};


// verify 
export const verifyPayment =async(tsxId:string)=>{
  try {
    const res = await axios.get(config.payment_verify!,{
      params:{
        signature_key: config.signature_key,
        store_id: config.store_id,
        type:"json",
        request_id:tsxId,
      }
    })
    return res.data;
  } catch (error) {
    console.log(error)
  }
}
