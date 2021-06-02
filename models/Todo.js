const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
    {
        task:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            require:false,
        },
        done:{
            type:Boolean,
            required:false,
        }
    }
);

module.exports = mongoose.model("Todo",Todo);