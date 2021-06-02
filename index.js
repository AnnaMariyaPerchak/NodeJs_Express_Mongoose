const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;
const todoRoutes = require("./routes/Todo");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/todoapp",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log("Connected to database");
});

app.use(cors())
app.use(bodyParser.json())
app.use("/api",todoRoutes)
app.listen(port,()=>{
    console.log(`Listening to http://localhost:${port}`)
})