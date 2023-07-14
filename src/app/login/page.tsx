"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function signupPage(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {}
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login Karvade re</h1>
            <label htmlFor="email">Username : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.email} id="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="name? jalebibai!"/>

            <label htmlFor="password">Password : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.password} id="password" onChange={(e) => setUser({...user, password: e.target.value})} placeholder="shhhhhh"/>

            <button className="p-2 border border-gray-300 rounded-lg m-4" onClick={onLogin}>Login</button>
            <Link href="/signup">New User?</Link>
        </div>
    )
}