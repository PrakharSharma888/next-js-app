import mongoose from 'mongoose';

export async function connect(){
    try{
        console.log(process.env.MONGO_URL);
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        
        connection.on('open',()=>{
            console.log("MongoDB is connected succesfully");
        })

        connection.on('error',(err)=>{
            console.log("MongoDB connection failed", err);
            process.exit()
        })
    }
    catch(err){
        console.error("Damn it broke",err);
    }
}