"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/Db/dbConnect"

export const fetchDonePayment = async (email)=>{
    await connectDB();

    const user = await User.findOne({email:email});
    const userNotFound = {
        message:"No user found with this email address"
    }
    if(!userNotFound){
        return userNotFound;
    }else{
        let username = user.username
        const donePayments = await Payment.find({to_name: username ,done:true});
        const paymentNotFound = {
            message:"No successful payments found"
        }
        if(!donePayments){
            return paymentNotFound;
        }else{
            return JSON.parse(JSON.stringify(donePayments));
            // console.log(donePayments);
        }
    }
}