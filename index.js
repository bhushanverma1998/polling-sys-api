require("dotenv").config();
require('./configs/mongoose');
const express=require('express');
const PORT=5000;
const app=express();

app.use(express.json());

app.use('/',require('./routes/index'));

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT} port`)
})