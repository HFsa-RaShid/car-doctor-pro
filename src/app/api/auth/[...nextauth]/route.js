import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import credentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    credentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!isPasswordCorrect) {
          return null;
        }
        return currentUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  
  pages: {
    signIn: "/login",
  },
  callbacks: {
        async signIn({ user, account }) {
        if(account.provider === 'google' || account.provider === 'github' || account.provider === 'facebook'){
            const {name, email, image}=user;
            try{
                const db = await connectDB();
                const userCollection = db.collection("users");
                const exist = await userCollection.findOne({email});
                if(!exist){
                    const result = await userCollection.insertOne(user);
                    return user;
                }
                else{
                    return user;
                }


            }
            catch(error){
                console.log("Error creating user:", error);
            }
        }
        else{
            return user;
        }
    },

  },
});

export { handler as GET, handler as POST };
