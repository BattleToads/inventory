"use strict";
var express = require("express");
var vendor_1 = require("../models/vendor");
var router = express.Router();
router.get('/', function (req, res) {
    vendor_1.default.find().populate('items').then(function (vendors) {
        res.json(vendors);
    });
});
router.post('/', function (req, res) {
    var vendor = new vendor_1.default();
    vendor.name = req.body.name;
    vendor.website = req.body.website;
    vendor.save().then(function (newVendor) {
        res.json(newVendor);
    });
});
router.post('/:id', function (req, res) {
    var vendorId = req.params.id;
    vendor_1.default.findById(vendorId).then(function (vendor) {
        vendor.name = req.body.name;
        vendor.website = req.body.website;
        vendor.save().then(function (updatedVendor) {
            res.json(updatedVendor);
        });
    });
});
router.delete('/:id', function (req, res) {
    var vendorId = req.params.id;
    vendor_1.default.remove({ _id: vendorId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
