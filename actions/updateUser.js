"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/Db/dbConnect"

export const updateUser = async (data, oldUsername) => {
    await connectDB();
    let newData = Object.fromEntries(data);
    if(oldUsername !== newData.username){
        const user = User.findOne({username: newData.username});
        if(user){
            return {error : "Username already exist"};
        }
        console.log("update hone wala h")
        await User.updateOne({email: newData.email}, newData);
        console.log("update ho gya h")
        await Payment.updateMany({to_name: oldUsername}, {to_name: newData.username});
        console.log("Payment bhi update ho ")
    }else{
        await User.updateOne({email: newData.email}, newData);
        console.log("ye wala chala hai isme")
    }
}