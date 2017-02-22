import * as mongoose from 'mongoose';
// import {IItem} from './item';

export interface IVendor extends mongoose.Document {
  name: string,
  website: string,
//  items: IItem[]
}

let vendorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  website: {type: String, required: true},
//  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

export default mongoose.model<IVendor>('Vendor', vendorSchema);
