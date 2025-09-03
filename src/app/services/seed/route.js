import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = connectDB();
    const servicesCollection = db.collection('services')
    try{

    } catch(error){
        console.log(error);
    }
}