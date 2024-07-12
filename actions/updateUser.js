"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/Db/dbConnect"

export const updateUser = async (data, oldUsername) => {
    await connectDB();
    let newData = Object.fromEntries(data);
    if(oldUsername !== newData.username){
        const user = await User.findOne({username: newData.username});
        if(user){
            return {error : "Username already exist"};
        }else{
            
            await User.findOneAndUpdate({username: oldUsername}, newData);
            
            await Payment.updateMany({to_name: oldUsername}, {to_name: newData.username});
            
        }
    }else{
        await User.findOneAndUpdate({username: oldUsername}, newData);
        
    }
}