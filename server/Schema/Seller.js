const mongoose = require('mongoose');
const SellerSchema = new mongoose.Schema({
    uid: {type: String, required:true},
    name: {type: String, required:true},
    address1: {type: String, required:true},
    address2: String,
    phoneNumber: String,
    emailAddress: String,
}, { timestamps: { createdAt: 'created_at' }});

const Seller = mongoose.model('Seller', SellerSchema)

module.exports = Seller