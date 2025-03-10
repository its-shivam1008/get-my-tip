import mongoose from "mongoose";
const {Schema, model} = mongoose;
const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    profilepic:{
        type:String,
    },
    name:{
        type:String,
        // required: true
    },
    password:{
        type:String
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
    },
    razorpayid:{
        type:String
    },
    razorpaysecret:{
        type:String
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;