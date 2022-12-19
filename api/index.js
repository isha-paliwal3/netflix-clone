const express = require("express");
const app = express();  //creating application
const mongoose = require("mongoose"); //connecting mongodb connection
const dotenv = require("dotenv");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(() => console.log('Db Connected')).catch((err) => console.log(err));
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

app.listen(8800, () => {
    console.log('Backend server is running');
} );  //app should listen to port 8800 of our localhost