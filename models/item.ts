import * as mongoose from 'mongoose';


let itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  purchasePrice: {type: String, required: true},
  salePrice: {type: String, required: true},
  owner_Id: {type: String, required: true}

});

export default mongoose.model('Item', itemSchema);
