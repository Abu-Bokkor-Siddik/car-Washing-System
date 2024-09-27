import { FilterQuery } from 'mongoose';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ServiceType } from './service.interface';
import { ServiceModel } from './service.model';

const serviceCreate = async (payload: ServiceType) => {
  const result = await ServiceModel.create(payload);
  return result;
};
// get single service
const singleService = async (_id: string) => {
  const result = await ServiceModel.findOne({ _id });

  return result;
};
// get all service
const allServices = async (query: Record<string, unknown>) => {
  // const result = await ServiceModel.find();
  const queryNew = { ...query };
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }
  //   const search =await ServiceModel.find()
  //   // here all search
  const search = ServiceModel.find({
    $or: [
      { price: { $regex: searchTerm, $options: 'i' } },
      { price: { $regex: searchTerm, $options: 'i' } },
    ],
  });

  // filter
  const removeSearch = ['searchTerm', 'sort'];
  removeSearch.forEach((value) => delete queryNew[value]);
  let filters = '';
  let durations = '';
  if (queryNew?.price) {
    filters = queryNew.price as string;
  }
  if (queryNew?.duration) {
    durations = queryNew.durations as string;
  }

  // console.log(query,"new query", queryNew);
  const filterQuery = search.find({
    $or: [{ price: filters}, { duration:durations}],
  });

  let sort = '+';
  if (query?.sort) {
    sort = query.sort as string;
  }
  const result = await filterQuery.sort(sort);
  return result;
};
// update
const updateService = async (_id: string, payload: Partial<ServiceType>) => {
  const result = await ServiceModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};
// delete
const deleteService = async (_id: string) => {
  const updateIsDeleted = await ServiceModel.findByIdAndUpdate(
    { _id },
    {
      $set: {
        isDeleted: true,
      },
    },
    { new: true }
  );

  const result = await ServiceModel.deleteOne({ _id });
  // delete update

  return updateIsDeleted;
};
export const allServiceHere = {
  serviceCreate,
  singleService,
  allServices,
  deleteService,
  updateService,
};
