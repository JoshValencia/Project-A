require('dotenv').config();
const app = require('express')();

const PORT = process.env.PORT || 8080;


const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
const Seller = require("./Schema/Seller")
const Store = require("./Schema/Store")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
//   const testSeller = new Seller({uid:"testId", name: "jushua", address1:"testAddress", phoneNumber: 09171795874, emailAddress: "jushuavalencia@gmail.com" })
//   const testStore1 = new Store({name: "testStore", owner: testSeller._id});
//   const testStore2 = new Store({name: "testStore", owner: testSeller._id});
//     testSeller.stores.push(testStore1._id)
//     testSeller.stores.push(testStore2._id)
//   testSeller.save();
//   testStore1.save();
//   testStore2.save();

// Seller.findOneAndUpdate({name: "jushua"}).then(response => {
//     console.log(response)
// })
}





app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`)
})