"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function signupPage(){
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user)
            console.log("Login Succesfull", response.data);
            toast.success("Login Succesfull")
            router.push("/profile")

        } catch (error) {
            console.log("Login Failed!",error);
        }
        finally{
            setLoading(false)
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing": "Login"}</h1>
            <label htmlFor="email">Username : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.email} id="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email"/>

            <label htmlFor="password">Password : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.password} id="password" onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password"/>

            <button className="p-2 border border-gray-300 rounded-lg m-4" onClick={onLogin}>{buttonDisabled ? "Enter the above detials" : "Login"}</button>
            <Link href="/signup">New User?</Link>
        </div>
    )
}