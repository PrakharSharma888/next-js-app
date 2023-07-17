import { connect } from "@/app/db/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest){

    try {
        console.log("hello?");
        const response = await request.json()
        const {email, password} = response
        console.log("hello?1");
        console.log("The response from the login page from user", email, password);
        console.log("hello?2");
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message: "User does not exists"}, {status: 400})
        }

        const campairing = await bcrypt.compare(password, user.password)
        if(!campairing){
            return NextResponse.json({message: "Wrong Password"}, {status: 400})
        }
        const userData = {
            id: user._id
        }
        // creating a token for the user
        const token = await jwt.sign(userData ,process.env.SECRET_TOKEN!, {expiresIn: "1d"})

        // saving into user's cookie
        const tokenResponse = NextResponse.json({
            message: "Login Successfull",
            success: true
        })

        tokenResponse.cookies.set("Token", token, {httpOnly: true})

        return tokenResponse

    } catch (error) {
        return NextResponse.json({message: "Error in login"}, {status: 500})
    }
}