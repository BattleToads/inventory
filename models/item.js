"use strict";
var mongoose = require("mongoose");
var itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    purchasePrice: { type: String, required: true },
    salePrice: { type: String, required: true },
    owner_Id: { type: String, required: true }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Item', itemSchema);
