const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path:'./dev.env'});
const studentRouter = require('./router/studentRouter.js');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then((con)=>{
    // console.log(con);
    console.log("DB is connected successfully");
})


app.use('/api', studentRouter);
// app.get("/test", (req, resp)=>{
//     resp.status(200).json({
//         status:299,
//         msg:"sucesss"
//     })
// })



const PORT = 8000;
app.listen(PORT,()=>{
    console.log("App is running at port "+PORT);
})