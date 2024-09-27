import { Schema, model } from 'mongoose';
import { ServiceType } from './service.interface';
const serviceSchema = new Schema<ServiceType>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// here is model
export const ServiceModel = model<ServiceType>('service', serviceSchema);
