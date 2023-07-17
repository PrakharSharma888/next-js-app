"use client";

import axios from "axios"
import Link from "next/link";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { useState } from "react";

export default function profilePage() {
    const router = useRouter();
    const [userData, setUserData] = useState("oh no")

    const getUserData = async () => {
        const res = await axios.get("/api/users/me")
        setUserData(res.data.data._id)
        console.log("User Detuals: ",res.data.data._id)
    }

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logged out successfully");
            router.push("/login");
        } catch (error) {
            console.log("Error logging out",error);
            toast.error("Error logging out");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <hr />
            <p>Profile Page</p>
            <h2>User Data: {userData == "oh no" ? "Nothing to Show here" : <Link href={`/profile/${userData}`}>{userData}</Link>}</h2>
            <button className="p-2 border bg-green-800 border-gray-300 rounded-lg m-4" onClick={logout}>Logout</button>
            <button className="p-2 border bg-blue-800 border-gray-300 rounded-lg m-4" onClick={getUserData}>Get User Data</button>
        </div>
    )
}