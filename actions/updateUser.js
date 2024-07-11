"use server"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/Db/dbConnect"

export const updateUser = async (data, oldUsername) => {
    await connectDB();
    let newData = Object.fromEntries(data);
    if(oldUsername !== newData.username){
        const user = User.findOne({username: oldUsername});
        if(u){
            return {error : "Username already exist"};
        }

    }
    await User.updateOne({email: newData.email}, newData);
}