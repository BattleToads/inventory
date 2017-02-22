"use strict";
var mongoose = require("mongoose");
var vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    website: { type: String, required: true },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Vendor', vendorSchema);
