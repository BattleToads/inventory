import * as express from 'express';
import Item from '../models/item';
import * as mongoose from 'mongoose';

let router = express.Router();

// get

router.get('/:id', (req, res) => {
// get id by logged in user
  Item.find({owner_Id:req.params["id"]}).then((items) => {
    res.json(items);
  });
});

// create
router.post('/', (req, res) => {
  let item:any = new Item();
  item.name = req.body.name;
  item.purchasePrice = req.body.purchasePrice;
  item.salePrice = req.body.salePrice;
  item.owner_Id = req.body.owner_Id;

  //save it
  item.save().then((newItem) => {
    res.json(newItem);
  });
});

//update an item
router.post('/:id', (req, res) => {
  let itemId = req.params.id;

  Item.findById(itemId).then((item:any) => {
    item.name = req.body.name;
    item.purchasePrice = req.body.purchasePrice;
    item.salePrice = req.body.salePrice;

    // save it
    item.save().then((updatedItem) => {
      res.json(updatedItem);
    });
  });
});

// delete item
router.delete('/:id', (req, res) => {
  let itemId = req.params.id;
  Item.remove({_id:itemId}).then(() => {
    res.sendStatus(200);
  });
});

export default router;
