import { connect } from "@/app/db/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
     

connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await getTokenData(request)
        const user = await User.findById(userId).select("-password")

        return NextResponse.json({
            message: "User Found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            status: 500
        })
    }
}