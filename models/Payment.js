import mongoose from "mongoose";
const {model, Schema} = mongoose;
const paymentSchema = new Schema({
    from_name:{
        type:String,
        required:true
    },
    to_name:{
        type:String,
        required:true
    },
    o_id:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    message:{
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
    done:{
        type:Boolean,
        default:false
    }
});

export default mongoose.models.Payment ||  model("Payment", paymentSchema);;