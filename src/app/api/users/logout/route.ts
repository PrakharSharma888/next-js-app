import { NextResponse } from "next/server";

export async function GET() {
    try {
        
        const tokenResponse = NextResponse.json({
            message: "Logout Successfull",
            success: true,
            status: 201
        })

        tokenResponse.cookies.set("token", "", {httpOnly: true})
        return tokenResponse

    } catch (error: any) {
        return NextResponse.json({
            message: "Error in logout",
            status: 500,
            error: error.message
        })
    }
}