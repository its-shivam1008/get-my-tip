import mongoose from "mongoose";
const {Schema, model} = mongoose;
const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required: ture
    },
    username:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }
});

export default mongoose.model.User || model("User", userSchema);