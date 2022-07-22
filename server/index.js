require('dotenv').config();
const app = require('express')();

const PORT = process.env.PORT || 8080;


const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
}




app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`)
})