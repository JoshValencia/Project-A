const mongoose = require('mongoose');
const SellerSchema = new mongoose.Schema({
    uid: {type: String, required:true},
    name: {type: String, required:true},
    address1: {type: String, required:true},
    address2: String,
    phoneNumber: Number,
    emailAddress: String,
    stores: [{type: 'ObjectId', ref: 'Store'}]
}, { timestamps: { createdAt: 'created_at' }});

const Seller = mongoose.model('Seller', SellerSchema)

module.exports = Seller