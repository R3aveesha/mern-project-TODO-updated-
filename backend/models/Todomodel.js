import mongoose from "mongoose";

const todoSchema =mongoose.Schema({

    Title:{
        type:String,
        required:true,
    },
    SpecialNote:{
        type:String
    },
    
})

export const Todo =mongoose.model('todoModel',todoSchema)


