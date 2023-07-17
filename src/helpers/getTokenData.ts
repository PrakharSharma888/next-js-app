import jwt  from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function getTokenData (request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || ""
        const decodedToken: any = jwt.verify(token, process.env.SECRET_TOKEN!)
        console.log("Username from token: ", decodedToken.username)
        return decodedToken.id!
    } catch (error: any) {
        throw new Error(error.message)
    }
}