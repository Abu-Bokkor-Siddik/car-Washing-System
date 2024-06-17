/* eslint-disable prefer-const */
import { SlotType } from './slot.interface';
import { SlotModel } from './slot.model';
const slotCreateService = async (payload: SlotType) => {
  const { service, date, startTime, endTime } = payload;
  // convert in to number .
  const startInNumber =
    Number(startTime.split(':')[0]) * 60 + Number(startTime.split(':')[1]);

  const endInNumber =
    Number(endTime.split(':')[0]) * 60 + Number(endTime.split(':')[1]);
  // calculate
  let emptySlot: SlotType[] = [];
  for (
    let startNumber = startInNumber;
    startNumber < endInNumber;
    startNumber += 60
  ) {
    // slot time here start
    const slotStartTime = `${String(Math.floor(startNumber / 60)).padStart(
      2,
      '0'
    )}:${String(Math.floor(startNumber % 60)).padStart(2, '0')}`;

    // slot time end
    const slotEndTime = `${String(Math.floor((startNumber + 60) / 60)).padStart(
      2,
      '0'
    )}:${String(Math.floor((startNumber + 60) % 60)).padStart(2, '0')}`;
    const newSlotData = {
      service: service,
      date: date,
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: 'available',
    };
    emptySlot.push(newSlotData);
  }
  const result = await SlotModel.insertMany(emptySlot);
  return result;
};
// get slot service
const getAllSlot = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  let dates: string = '';
  if (query?.date) {
    dates = query?.date as string;
  }
  // get
  const slot = 'available';
  const findAvailable = SlotModel.find({ isBooked: slot }).populate('service');
  const searchData = findAvailable.find({
    date: { $regex: dates },
  });
  // delete data form queryObj
  const remove = ['date'];
  remove.forEach((value) => delete queryObj[value]);

  let serviceIdRemove = {};
  if (queryObj.serviceId) {
    serviceIdRemove = { service: queryObj.serviceId };
  }
  const result = await searchData.find(serviceIdRemove);
  // console.log(result)
  return result;
};
export const allService = {
  slotCreateService,
  getAllSlot,
};
