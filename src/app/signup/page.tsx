"use client";
import Link from "next/link";
import React, { use } from "react";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function signupPage(){
    toast('Hello World', {duration: 4000,
        position: 'top-center'});
    const router = useRouter();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(user.username && user.email && user.password){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/signup', user)
            console.log("Signup sucessfull", response.data);
            toast.success("Signup sucessfull")
            router.push('/login')
        } catch (error: any) {
            toast.error(error)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing.." : "Signup"}</h1>
            <label htmlFor="username">Username : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.username} id="username" onChange={(e) => setUser({...user, username: e.target.value})} placeholder="name? jalebibai!"/>

            <label htmlFor="email">Email : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="text" value={user.email} id="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="ee mail kardo"/>

            <label htmlFor="password">Password : </label>
            <input className="p-2 border border-gray-300 rounded-lg m-4 text-black" type="password" value={user.password} id="password" onChange={(e) => setUser({...user, password: e.target.value})} placeholder="shhhhhh"/>

            <button className="p-2 border border-gray-300 rounded-lg m-4" onClick={onSignup}>{buttonDisabled ? "Pehle uper ka sabh bhar" : "Signup Karle le abh"}</button>
            <Link href="/login">To Login Click Here</Link>
        </div>
    )
}