import * as express from 'express';
import Vendor from '../models/vendor';
import * as mongoose from 'mongoose';

let router = express.Router();

router.get('/', (req, res) => {
  Vendor.find().populate('items').then((vendors) => {
    res.json(vendors);
  })
})

router.post('/', (req, res) => {
  let vendor = new Vendor();
  vendor.name = req.body.name;
  vendor.website = req.body.website;

  // save it
  vendor.save().then((newVendor) => {
    res.json(newVendor);
  });
});

// update

router.post('/:id', (req, res) => {
  let vendorId = req.params.id;

  Vendor.findById(vendorId).then((vendor) => {
    vendor.name = req.body.name;
    vendor.website = req.body.website;

    // save it
    vendor.save().then((updatedVendor) => {
      res.json(updatedVendor);
    });
  });
});

// delete vendors
router.delete('/:id', (req, res) => {
  let vendorId = req.params.id;
  Vendor.remove({_id:vendorId}).then(() => {
    res.sendStatus(200);
  });
});

export default router;
