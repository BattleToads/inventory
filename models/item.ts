import * as mongoose from 'mongoose';

export interface IItem extends mongoose.Document {
  vendor: mongoose.Types.ObjectId;
  name: string;
  purchasePrice: number;
  salePrice: number;
}

let itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  purchasePrice: {type: String, required: true},
  salePrice: {type: String, required: true}
});

export default mongoose.model<IItem>('Item', itemSchema);
