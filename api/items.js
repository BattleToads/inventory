"use strict";
var express = require("express");
var item_1 = require("../models/item");
var router = express.Router();
router.get('/:id', function (req, res) {
    item_1.default.find({ owner_Id: req.params["id"] }).then(function (items) {
        res.json(items);
    });
});
router.post('/', function (req, res) {
    var item = new item_1.default();
    item.name = req.body.name;
    item.purchasePrice = req.body.purchasePrice;
    item.salePrice = req.body.salePrice;
    item.owner_Id = req.body.owner_Id;
    item.save().then(function (newItem) {
        res.json(newItem);
    });
});
router.post('/:id', function (req, res) {
    var itemId = req.params.id;
    item_1.default.findById(itemId).then(function (item) {
        item.name = req.body.name;
        item.purchasePrice = req.body.purchasePrice;
        item.salePrice = req.body.salePrice;
        item.save().then(function (updatedItem) {
            res.json(updatedItem);
        });
    });
});
router.delete('/:id', function (req, res) {
    var itemId = req.params.id;
    item_1.default.remove({ _id: itemId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
