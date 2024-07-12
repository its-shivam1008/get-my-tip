"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/Db/dbConnect"
import User from "@/models/User"

export const initiate = async(amount, to_username, paymentform) =>{
    await connectDB();
    const user = await User.findOne({username: to_username})
    var instance = new Razorpay({ key_id:user.razorpayid, key_secret: user.razorpaysecret });
    
    let options = {
        amount: Number.parseInt(amount),
        currency:"INR"
    }

    let ordersCreation = await instance.orders.create(options)

    await Payment.create({
        o_id: ordersCreation.id,
        amount: amount,
        to_name:to_username,
        from_name:paymentform.name,
        message:paymentform.message
    })

    return ordersCreation;
}