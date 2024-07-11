"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/Db/dbConnect"

export const fetchDonePayment = async (email)=>{
    await connectDB();

    const user = await User.findOne({email:email});
    if(!user){
        return {
            error:"No user found with this email address"
        };
    }else{
        let username = user.username
        const donePayments = await Payment.find({to_name: username ,done:true}).sort({amount:-1});
        if(!donePayments){
            return {
                error:"No successful payments found"
            };
        }else{
            return JSON.parse(JSON.stringify(donePayments));
            // console.log(donePayments);
        }
    }
}

export const fetchUser = async (email) =>{
    await connectDB();
    const u = await User.findOne({email:email});
    if(!u){
        return {
            error:"No user found with this email address"
        };
    }else{
        return JSON.parse(JSON.stringify(u));
    }
}

export const fetchUserByUsername = async (username) =>{
    await connectDB();
    const u = await User.findOne({username:username});
    if(!u){
        return {
            error:"No user found with this email address"
        };
    }else{
        return JSON.parse(JSON.stringify(u));
    }
}