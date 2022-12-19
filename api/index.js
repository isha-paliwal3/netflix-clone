const express = require("express");
const app = express();  //creating application
const mongoose = require("mongoose"); //connecting mongodb connection
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

dotenv.config();

main().catch(err => console.log(err));

async function main() {
    
  mongoose.set('strictQuery', true);  
  await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(() => console.log('Db Connected')).catch((err) => console.log(err));

}

app.use(express.json());           //to use body json file 
app.use("/api/auth" , authRoute);  //if you make any request take this end point and this end point belong to this route
app.use("/api/users" , userRoute);

app.listen(8800, () => {
    console.log('Backend server is running');
} );  //app should listen to port 8800 of our localhost