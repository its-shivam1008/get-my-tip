import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/Db/dbConnect";
import User from "@/models/User";

//I have to retrieve the process.env.KEY_Sectret from the user.

export const POST  = async (req)=> {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    let p = await Payment.findOne({o_id: body.razorpay_order_id});
    if(!p){
        return NextResponse.json({success: false, message:"Order id not found"});
    }
    let user = await User.findOne({username: p.to_name});
    const secret = user.razorpaysecret

    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id":  body.razorpay_payment_id}, body.razorpay_signature, secret);

    if(xx){
        const updatedPayment = await Payment.findOneAndUpdate({o_id: body.razorpay_order_id}, {done: true}, {new:true});
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/profile/tip/${updatedPayment.to_name}?paymentdone=true`);
    }else{
        return NextResponse.json({success: false, message:"Payment verification failed"});
    }
}