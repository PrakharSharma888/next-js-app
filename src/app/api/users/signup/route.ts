import { connect } from "@/app/db/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

connect();

// this is how you handle diffrent request methods
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {username, password, email} = reqBody
        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating user
        const newUser = new User({
            username, 
            email,
            password: hashedPassword
        })

        const saveUser = await newUser.save()
        console.log("save User: ",saveUser);

        return NextResponse.json({message: "User Created Succesfully"}, {status: 201})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}