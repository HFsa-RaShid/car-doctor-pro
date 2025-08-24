import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const newUser = await request.json();
    try{
        const db = await connectDB();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({email: newUser.email});
        if(exist){
            return Response.json({message: "User already exists"}, {status: 409});
        }
        const result = await userCollection.insertOne(newUser);
        return  Response.json({message: "User created successfully", userId: result.insertedId}, {status: 200});
    }
    catch(error){
        console.log("Error creating user:", error);
        return Response.json({message: "Error creating user"}, {status: 500});
    }

}