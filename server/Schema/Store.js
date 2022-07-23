const mongoose = require('mongoose');
const StoreSchema = new mongoose.Schema({
    name: {type:String, required:true},
    owner: {type: 'ObjectId', ref: 'Seller'}
}, { timestamps: { createdAt: 'created_at' }});

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store