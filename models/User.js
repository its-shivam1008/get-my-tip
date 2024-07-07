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
        // required: true
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

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;