import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import mongoose from "mongoose";
import connectDB from "@/Db/dbConnect";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
     }),
    // ...add more providers here
    
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials}) {
      if(account.provider == 'github' || account.provider == 'google'){
          await connectDB();
          // const client = mongoose.connect("mongodb://localhost:27017/GetMeATip");
          const currentUser = await User.findOne({email:user.email});
          // console.log(currentUser);
          if(!currentUser){
            const newUser = new User({
              email:user.email,
              name:user.name,
              profilepic:user.image,
              username:user.email.split('@')[0]
            })       
            await newUser.save();
            user.name = newUser.username
          }else{
            user.name = currentUser.username
          }
          return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username;
      return session;
    },
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };