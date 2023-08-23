const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth.js")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log("Database Connection Successful!!")}).catch((err)=>{console.log(err)});

app.use(express.json()) //parses incoming req with json body
app.use("/netflix_server/auth/", authRoute);

app.listen(8800, ()=>{
    console.log("Netflix Server is running!!")
})