import * as express from 'express';
import Item from '../models/item';
import * as mongoose from 'mongoose';

let router = express.Router();

// get

router.get('/', (req, res) => {
  Item.find().then((items) => {
    res.json(items);
  });
});

// create
router.post('/', (req, res) => {
  let item = new Item();
  item.name = req.body.name;
  item.purchasePrice = req.body.purchasePrice;
  item.salePrice = req.body.salePrice;

  //save it
  item.save().then((newItem) => {
    res.json(newItem);
  });
});

//update an item
router.post('/:id', (req, res) => {
  let itemId = req.params.id;

  Item.findById(itemId).then((item) => {
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
